---
title: Introduccion a git
description: Esta es una página en mi sitio impulsado por Starlight
---
<details>
<summary>Web de referencia</summary>
https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez
</details>

## Pasos para utilizar Git y Github
1. Configuración inicial de Git:

- Configurar nombre de usuario y email:

```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```
- Cambiar nombre por defecto de la rama principal: La rama “master” en Git, no es una rama especial. Es como cualquier otra rama. La única razón por la cual aparece en casi todos los repositorios es porque es la que crea por defecto el comando `git init` y la gente no se molesta en cambiarle el nombre.
Github cambió el nombre de la rama "master" a rama "main", por eso conviene cambiar en Git el nombre de la rama por defecto.
```
$ git config --global init.defaultBranch main
```
2. Ejecutar `git init` en el directorio de trabajo desado, para inicializar el repositorio local.
- Se creará una carpeta oculta llamada `.git` en el "working directory".
