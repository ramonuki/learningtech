---
title: Introduccion a linux
description: Esta es una página en mi sitio impulsado por Starlight
---
# Introduccion a linux

:::tip[¿Sabías esto?]
Para escribir un texto dentro de varios archivos y añadir el nombre del propio archivo en el texto hacemos:
```sh
for file in * do
  echo "Antes del 1r commit en $file" >> "$file"
done
```
Para escribirlo todo en la misma linea:
```sh
for file in *; do     echo "Antes del 1r commit en $file" >> "$file"; done
```
