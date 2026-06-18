import {
  getLlama,
  LlamaChatSession,
  ChatMLChatWrapper
} from "node-llama-cpp";

const modelPath = "./openhermes-2.5-mistral-7b.Q4_K_M.gguf";
const question = process.argv.slice(2).join(" ") || "Привет! Кто ты?";

const llama = await getLlama();

const model = await llama.loadModel({
  modelPath
});

const context = await model.createContext({
  contextSize: 4096,
  threads: 4
});

const session = new LlamaChatSession({
  contextSequence: context.getSequence(),
  chatWrapper: new ChatMLChatWrapper({
    systemPrompt: "Ты полезный локальный ассистент. Отвечай кратко и по делу."
  })
});

const response = await session.prompt(question, {
  temperature: 0.4,
  topP: 0.9,
  maxTokens: 2000,
  stop: ["<|im_end|>", "<|im_start|>"]
});

console.log(response.trim());
