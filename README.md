# Установка и запуск ollama

```sh
docker compose up -d
docker compose down
```

# Скачивание моделей

![Ollama](https://ollama.com/public/icon-32x32.png) [library](https://ollama.com/library)

```sh
docker compose exec ollama ollama pull llama3.2
docker compose exec ollama ollama pull qwen2.5-coder
docker compose exec ollama ollama pull nomic-embed-text
docker compose exec ollama ollama pull wizard-vicuna-uncensored
docker compose exec ollama ollama pull wizard-vicuna-uncensored:13b # 14.2 GiB RAM
docker compose exec ollama ollama pull wizard-vicuna-uncensored:30b # 30.6 GiB RAM
docker compose exec ollama ollama pull gemma3 #:4b # 2.8 GiB RAM
docker compose exec ollama ollama pull gemma3:12b
docker compose exec ollama ollama pull gemma3:27b # 23.6 GiB RAM
docker compose exec ollama ollama pull gemma3:27b-it-qat # 22.0 GiB RAM
docker compose exec ollama ollama pull deepseek-r1:1.5b
docker compose exec ollama ollama pull deepseek-r1 #:7b
docker compose exec ollama ollama pull deepseek-r1:70b
docker compose exec ollama ollama pull mistral-small3.1 # 16.4 GiB RAM
docker compose exec ollama ollama pull huihui_ai/gemma3-abliterated
docker compose exec ollama ollama pull openhermes
docker compose exec ollama ollama pull gemma4
docker compose exec ollama ollama pull gemma4:31b
docker compose exec ollama ollama pull gemma4:31b-cloud
docker compose exec ollama ollama pull huihui_ai/gemma-4-abliterated
docker compose exec ollama ollama pull huihui_ai/gemma-4-abliterated:12b
docker compose exec ollama ollama pull huihui_ai/gemma-4-abliterated:26b
docker compose exec ollama ollama pull huihui_ai/gemma-4-abliterated:31b
docker compose exec ollama ollama pull huihui_ai/gemma-4-abliterated:48b
```

# Использование

[local Open WebUI](http://localhost:3001)

# Доп информация

- [ollama/docs/api.md at main · ollama/ollama · GitHub](https://github.com/ollama/ollama/blob/main/docs/api.md)
- [local ollama](http://localhost:11434/api/tags)

```sh
docker compose exec ollama bash
docker compose exec ollama ollama --help
docker compose exec ollama ollama list
docker compose exec ollama ollama show gemma4 --modelfile
```

Проверить доступ докера к GPU

```sh
docker run --rm -it --gpus=all nvcr.io/nvidia/k8s/cuda-sample:nbody nbody -gpu -benchmark
```
