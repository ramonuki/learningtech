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
:::

El texto puede estar **en negrita**, _en cursiva_, o ~~tachado~~.

Puedes [enlazar a otra página](/constellations/andromeda/).

Puedes resaltar `código en línea` con comillas invertidas.

![Una ilustración de planetas y estrellas con la palabra “astro”](https://raw.githubusercontent.com/withastro/docs/main/public/default-og-image.png)

:::note
Starlight es un conjunto de herramientas para sitios de documentación construido con [Astro](https://astro.build/). Puedes comenzar con este comando:



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



