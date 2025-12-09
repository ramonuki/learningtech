---
title: Introduccion a git
description: Esta es una página en mi sitio impulsado por Starlight
---
<details>
<summary>Web de referencia</summary>
https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez
</details>

## Pasos para utilizar Git y Github
### Configuración inicial
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

- Consultar configuracion de según contextos (sistema, global y local).
```
$ git config --list --show-scope
```
### ¿Cómo inicializar un nuevo proyecto Git?
Crear un proyecto desde cero (repositorio local):
1. Ejecutar `git init` en el directorio de trabajo desado, para inicializar el repositorio local.
```
$ git init
```
- Se creará una carpeta oculta llamada `.git` en el "working directory" (directorio donde nos encontramos).

2. Si queremos crear una carpeta configurada con el nombre del proyecto ejectutamos:

```
$ git init nombre_proyecto
```
- Esto crea una carpeta con el nombre elegido configurada para utilizar Git, pero vacía (contendrá un directorio oculto `.git`).
- A continuación hay que moverse al interior de la carpeta `nombre_proyecto` para trabajar con git.
```
$ cd nombre-proyecto
```
> [!CAUTION]
> No borres nunca el directorio .git de tu proyecto. Si se borra no se puede acceder al repositorio (toda la información del repositorio está en el directorio `.git`).

> [!NOTE]
> Podemos ejecutar `git status` para saber si el proyecto actual tiene un repositorio inicializado correctamente.

### Los tres estados en Git

Al usar Git, los archivos de tu proyecto se pueden encontrar en uno de los siguientes estados:

- **Modificado (_modified_)**:
  El archivo contiene cambios pero todavía no han sido marcados para ser confirmados.
  Se encuentra en el  **directorio de trabajo**.

- **Preparado (_staged_)**:
  Son los archivos que han sido modificados en el directorio de trabajo y se han marcado como preparados para ser confirmados en el repositorio local.
  Se encuentran en un **área temporal transitoria**.
  Esta acción recibe el nombre de **`add`**.

- **Confirmado (_committed_)**:
  El archivo se encuentra grabado en el **repositorio local**.
  Esta acción recibe el nombre de **`commit`**.


### Esquema del ciclo de vida de un archivo

```
[Directorio de trabajo]
        │
        │ git add
        ▼
[Área temporal transitoria (stage area)]
        │
        │ git commit
        ▼
[Repositorio local]
        │
        │ git push
        ▼
[Repositorio remoto]
```


### Empezando
Creamos un fichero en el directorio de trabajo, si ejecutamos `git status` nos indica que el fichero no tiene seguimiento por parte de git. El archivo está en estado **modificado**.

- Borrar un archivo en estado **modificado** (sin que se haya hecho un `commit` todavía):
```
$ git clean -[opciones]
```
[opciones]

`-n` simula que ejecuta el comando pero no borra nada.

`-f` fuerza el borrado de archivos.

`-d` borra también directorios.

`-i` pregunta antes de borrar cada archivo.
