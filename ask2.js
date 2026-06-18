import {
  getLlama,
  LlamaChatSession,
  ChatMLChatWrapper
} from "node-llama-cpp";

const modelPath = "./openhermes-2.5-mistral-7b.Q4_K_M.gguf";
const question = process.argv.slice(2).join(" ") || "Привет! Кто ты?";

const llama = await getLlama();

const model = await llama.loadModel({ modelPath });

const context = await model.createContext({
  contextSize: 4096,
  threads: 4
});

const session = new LlamaChatSession({
  contextSequence: context.getSequence(),
  chatWrapper: new ChatMLChatWrapper({
    systemPrompt: "Ты полезный локальный ассистент. Отвечай связно, завершай мысль полностью."
  })
});

const options = {
  temperature: 0.35,
  topP: 0.9,
  maxTokens: 700
};

function looksFinished(text) {
  const t = text.trim();

  if (!t) return false;

  return /[.!?…:;»)"'\]]$/u.test(t)
    && !/(и|а|но|или|что|как|если|потому|который|которая|это|в|на|с|по|для)$/iu.test(t);
}

async function askAndPrint(prompt) {
  let text = "";

  const response = await session.prompt(prompt, {
    ...options,
    onTextChunk(chunk) {
      text += chunk;
      process.stdout.write(chunk);
    }
  });

  return text || response;
}

let full = "";

full += await askAndPrint(question);

for (let i = 0; i < 5 && !looksFinished(full); i++) {
  process.stdout.write("\n\n--- продолжение ---\n\n");

  const more = await askAndPrint(
    "Продолжи ровно с места обрыва. Не начинай заново, не резюмируй."
  );

  full += more;
}

process.stdout.write("\n");
