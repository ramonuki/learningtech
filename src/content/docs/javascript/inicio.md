---
title: Chapter 2. Lexical Structure
description: Revision de la estructura de JS
---
# Introduccion a javascript
---
title: Chapter 2. Lexical Structure
---
La estructura léxica de un lenguaje de programación es el conjunto de reglas que indican cómo tienes que escribir los programas. Esto incluye el como se escriben lo comentarios, como se definen las variables o como se separa una instrucción de la siguiente.

## ¿Qué normas sigo para escribir en JS?
Los básicos:
1. **Mayúsculas y minúsculas**: JS es "case-sensitive".
2. **Espacios**: JS ignora los espacios/tabulaciones/saltos de linea entre las palabras del lenguaje.
3. **Comentarios**: Sirven para escribir notas en el código. JS los ignora a la hora de ejecutar el programa.
   1. Comentarios de 1 línea:
   ```js
   //Esto es un comentario de una linea.
   ```
   2. Comentrios de varias líneas:
   ```js
   /* Esto es un comentarios
      de varias líneas. */
   ```
4. **Literales**: Son valores fijos que se escriben en el código, representan valores de datos primitivos que no cambian.
:::note
Estos valores no son variables, sino que son el valor mismo.

```js
   25 //El numero 25
   2.5 //El numero 2.5
   "hola mundo" //Una cadena de texto
   true // Un valor Booleano
   null //Ausencia de un objeto
```
:::

# JavaScript
## Introducción
"Vanilla JavaScript" es simplemente JavaScript sin ninguna libreria.
:::note
Universo JavaScript
- [Node.js](https://nodejs.org/es): Permite ejecutar JS fuera del navegador, i.e. en un servidor (Backend).
- [npm](https://www.npmjs.com/) (node package manager): Plataforma Open Source para publicar y compartir código/herramientas hechas con JS (Backend).
- [mongoDB](https://www.mongodb.com/): BBDD no relacional que almacena objetos JS (Backend).
- [React Native](https://reactnative.dev/) & [NativeScript](https://nativescript.org/): Frameworks de JS para crear apps en iOS y Androi.
- [Electron](https://www.electronjs.org/): Framework para construir aplicaciones de escritorio con JS (ej. Slack).
:::
JavaScript ≠ Java
| JavaScript  | Java |
| ------------- | ------------- |
| - Lenguaje interpretado  | - Lenguaje compilado |
| - Tipado dinámico| - Tipado estático|
| - Tipado débil| - Tipado fuerte|
| | | 

**Tipado dinámico**
Se ejecuta el programa y entonces se comprueban los tipos.

```java
int x = 5; // Java (tipado estático)
```

**Tipado estático**
Se comprueban los tipos y entonces se ejecuta el programa.

```javascript
let x = 5; // JavaScript (tipado dinámico)
```
**Tipado fuerte vs Tipado débil**

El tipado fuerte o débil se refiere a **qué tan estrictamente se aplican los tipos de datos en el lenguaje**.

En lenguajes **fuertemente tipados** como Python o Ruby, no se permite la combinación de tipos distintos sin una conversión explícita:

```python
"5" + 5  # En Python, esto genera un error
```

En cambio, JavaScript es **débilmente tipado**, lo que significa que **hace conversiones automáticas entre tipos**:

```javascript
console.log("5" + 5); // "55" (convierte el número a string automáticamente)
```

Si bien esto puede ser útil en algunos casos, también puede generar comportamientos inesperados si no se maneja con cuidado.

## JavaScript y la Programación Orientada a Objetos

JavaScript es un lenguaje **principalmente orientado a objetos**, aunque de una forma más flexible que otros lenguajes como Java o C++.

Esto significa que **JavaScript admite los conceptos básicos de la Programación Orientada a Objetos (POO)**, como:

- **Objetos y clases** para modelar problemas.
- **Reutilización de código** mediante prototipos y herencia.

Sin embargo, si vienes de un lenguaje donde la POO es central (como Java), es posible que encuentres JavaScript **menos estructurado para ciertos usos orientados a objetos**. Por ejemplo, **no hay una forma nativa de definir atributos privados en una clase**, lo que puede hacer que la encapsulación sea más complicada.

## JavaScript es un lenguaje de un solo hilo

Otro punto importante es que **JavaScript es un lenguaje de un solo hilo (single-threaded)**. Esto significa que **solo puede ejecutar una operación a la vez** en un determinado momento.

En contraste, lenguajes como Java permiten **ejecución concurrente y paralela** mediante hilos (`threads`). Esto hace que JavaScript **no sea ideal para tareas intensivas en procesamiento de datos**.

Por ejemplo, si llamas a la función `alert()` en un navegador:

```javascript
alert("Hola mundo");
```

El código **se detendrá hasta que el usuario cierre la alerta**, bloqueando la ejecución del resto del programa. Este tipo de comportamiento puede ser problemático en aplicaciones con muchas interacciones en tiempo real.

## Resumen

Para resumir, JavaScript tiene las siguientes características clave:

1. **Es un lenguaje interpretado**, no compilado.
2. **Es dinámicamente y débilmente tipado**:
   - El tipo de las variables se determina en tiempo de ejecución.
   - No impone restricciones estrictas sobre los tipos de datos.
3. **Es un lenguaje principalmente orientado a objetos**, aunque con menos restricciones que otros lenguajes como Java.
4. **Es de un solo hilo**, lo que significa que solo ejecuta una tarea a la vez, lo que puede afectar su rendimiento en operaciones complejas.



### 



## Tipo de datos
## Control de flujo
## Programación Orientada a Objetos
## Arrays y Objetos
## Sintaxis JavaScript ES6+
## Escribir y ejecutar un programa
## Código Asíncrono
## Crear un Web Server con JavaScript
## Dialectos de JavaScript
## Herramientas GenAI en el desarrollo JavaScript

