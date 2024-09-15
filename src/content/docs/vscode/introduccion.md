---
title: Introduccion a VSCode
description: Esta es una página en mi sitio impulsado por Starlight
---
# Introduccion a VSCode
## Atajos de teclado de VSCode:
<!-- Se utiliza html para que los enlaces se abran en una nueva pestaña -->
- <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf" target="_blank">Keyboard shortcuts para Linux</a>
- <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-mawindows.pdf" target="_blank">Keyboard shortcuts para Windows</a>
- <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macOS.pdf" target="_blank">Keyboard shortcuts para MacOS</a>
## Command Palette
El atajo de teclado para abrir la **Command Palette** es `Ctrl+Shift+P`. Nos permite acceder a toda las funcionalidades de VSCode y permite ver los atajos de teclado de las funciones más comunes.
La **Command Palette** nos permite ejecutar comandos de editor, abrir ficheros, buscar símbolos, ir a una determinada línea en un fichero, ...

- `Ctrl+P` te permite navegar a cualquier archivo o símbolo escribiendo su nombre.
- `Ctrl+Tab` te permite alternar entre el último conjunto de archivos abiertos.
- `Ctrl+Shift+O` te permite navegar a un símbolo específico en un archivo.
- `Ctrl+G` te permite navegar a una línea específica en un archivo.

Escribir `?` nos muestra una ista de los comandos disponibles.


- Open a folder
  - File > Open Folder (`Ctrl+K Ctrl+O`)
- File Explorer
  - View > Explorer (`Ctrl+Shift+E`)
- Search view
  -View > Search (`Ctrl+Shift+F`)
- Source Control
  - View > Source Control (SCM) (`Ctrl+Shift+G`)
- Run and Debug
  - View > Run (`Ctrl+Shift+D`)
- Extensions view
  - View > Extensions (`Ctrl+Shift+X`)
- Open the Command Palette.
  - View > Command Palette... (`Ctrl+Shift+P`)
- Output panel
  - View > Output (`Ctrl+K Ctrl+H`)
- Debug Console
  - View > Debug Console (`Ctrl+Shift+Y`)
- Problems panel
  - View > Problems (`Ctrl+Shift+M`)
- Integrated Terminal
<!-- Utilizo html, porque MD tiene problemas con los acentos graves -->
  - View > Terminal (<code>Ctrl+&#96;</code>)
- Create new terminal.
  - Create New Terminal (<code>Ctrl+Shift+&#96;</code>)
- Create a new file
  - File > New File (`Ctrl+N`)
- Save a file
  - File > Save (`Ctrl+S`)
- Auto Save
  - File > Auto Save
- Run
  - Run > Start Debugging (`F5`)
- Programming language extensions
  - Python - IntelliSense, linting, debugging, code formatting, refactoring, and more.
  - Live Preview - Hosts a local server to preview your webpages.
- Zoom
  - Zoom out (`Ctrl+-`)
  - Zoom in (`Ctrl+=`)
- Customize your editor with color themes.
  - File > Preferences > Theme > Color Theme (`Ctrl+K Ctrl+T`)
- Automatically format the source code.
  - Format Document command (`Ctrl+Shift+I`)

------------------------


Download and install VS Code.
From https://code.visualstudio.com/download
Open a folder
File > Open Folder (Ctrl+K Ctrl+O)
File Explorer
View > Explorer (Ctrl+Shift+E)
Search view
View > Search (Ctrl+Shift+F)
Source Control
View > Source Control (SCM) (Ctrl+Shift+G)
Run and Debug
View > Run (Ctrl+Shift+D)
Extensions view
View > Extensions (Ctrl+Shift+X)
Open the Command Palette.
View > Command Palette... (Ctrl+Shift+P)
Output panel
View > Output (Ctrl+K Ctrl+H)
Debug Console
View > Debug Console (Ctrl+Shift+Y)
Problems panel
View > Problems (Ctrl+Shift+M)
Integrated Terminal
View > Terminal (Ctrl+`)
Create a new file
File > New File (Ctrl+N)
Save a file
File > Save (Ctrl+S)
Auto Save
File > Auto Save
Run
Run > Start Debugging (F5)
Programming language extensions
Python - IntelliSense, linting, debugging, code formatting, refactoring, and more.
Live Preview - Hosts a local server to preview your webpages.
Zoom
Zoom out (Ctrl+-)
Zoom in (Ctrl+=)
Customize your editor with color themes.
File > Preferences > Theme > Color Theme (Ctrl+K Ctrl+T)








El texto puede estar **en negrita**, _en cursiva_, o ~~tachado~~.

Puedes [enlazar a otra página](/constellations/andromeda/).

Puedes resaltar `código en línea` con comillas invertidas.

![Una ilustración de planetas y estrellas con la palabra “astro”](https://raw.githubusercontent.com/withastro/docs/main/public/default-og-image.png)

:::note
Starlight es un conjunto de herramientas para sitios de documentación construido con [Astro](https://astro.build/). Puedes comenzar con este comando:

```sh
npm run create astro@latest --template starlight
```

:::


:::tip[¿Sabías esto?]
Astro te ayuda a construir sitios web más rápidos con la[“Arquitectura de Islas”](https://docs.astro.build/es/concepts/islands/).
:::

:::caution
Si no estás seguro de si deseas un sitio de documentación increíble, piénsalo dos veces antes de usar [Starlight](/es/).
:::

:::danger
Tus usuarios pueden ser más productivos y encontrar más fácil de usar tu producto gracias a las útiles características de Starlight.

- Navegación clara
- Tema de color configurable por el usuario
- [Soporte de i18n](/es/guides/i18n/)

:::




> Esto es una cita en bloque, que se utiliza comúnmente para citar a otra persona o documento.
>
> Las citas en bloque se indican con un `>` al inicio de cada línea.






```js
// Código JavaScript con resaltado de sintaxis.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l);
  return true;
};
```




```js {2-3}
function demo() {
  // Esta línea (#2) y la siguiente están resaltadas
  return 'Esta es la línea #3 de este fragmento';
}
```






```js "Términos individuales" /También.*compatibles/
// Términos individuales también pueden ser resaltados
function demo() {
  return 'También las expresiones regulares son compatibles';
}
```





```js "return true;" ins="insertados" del="eliminados"
function demo() {
  console.log('Estos son tipos de marcadores insertados y eliminados');
  // La declaración de retorno utiliza el tipo de marcador predeterminado
  return true;
}
```






```diff lang="js"
  function thisIsJavaScript() {
    // ¡El bloque completo se resalta como JavaScript,
    // y aún podemos añadir marcadores de diferencias a él!
-   console.log('Código antiguo a eliminar')
+   console.log('¡Nuevo y brillante código!')
  }
```

```js
// mi-archivo-de-prueba.js
console.log('¡Hola mundo!');
```

```bash title="Instalando dependencias…"
npm install
```


```bash frame="none"
echo "Esto no se renderiza como una terminal a pesar de usar el lenguaje bash"
```

<details>
<summary>¿Dónde y cuándo es más visible la constelación de Andrómeda?</summary>

La [constelación de Andrómeda](<https://es.wikipedia.org/wiki/Andr%C3%B3meda_(constelaci%C3%B3n)>) es más visible en el cielo nocturno durante el mes de noviembre en latitudes entre `+90°` y `−40°`.

</details>



