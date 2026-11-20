# Ollama и Open WebUI

## Запуск

```sh
docker compose up -d
```

## Скачивание моделей

![Ollama](https://ollama.com/public/icon-16x16.png) [library](https://ollama.com/library)

```sh
docker compose exec ollama ollama pull deepseek-r1
docker compose exec ollama ollama pull openhermes
docker compose exec ollama ollama pull gemma3 # около 3.4 GB RAM
docker compose exec ollama ollama pull gemma4
docker compose exec ollama ollama pull huihui_ai/gemma3-abliterated # uncensored
docker compose exec ollama ollama pull huihui_ai/gemma-4-abliterated # uncensored
```

## Использование

[Open WebUI](http://localhost:3001)

## Дополнительные команды

### Выключить

```sh
docker compose down
```

### Список моделей

```sh
docker compose exec ollama ollama list
```

### Обновить все модели

```sh
docker compose exec -T ollama sh -c \
  'ollama list | awk "NR>1 {print \$1}" | xargs -r -n1 ollama pull'
```

### Проверить доступ докера к GPU

```sh
docker run --rm -it --gpus=all nvcr.io/nvidia/k8s/cuda-sample:nbody nbody -gpu -benchmark
```

### Разное

- [ollama/docs/api.md at main · ollama/ollama · GitHub](https://github.com/ollama/ollama/blob/main/docs/api.md)
- [Список моделей через API](http://localhost:11434/api/tags)

```sh
docker compose exec ollama bash
docker compose exec ollama ollama --help
docker compose exec ollama ollama show gemma4 --modelfile
```
