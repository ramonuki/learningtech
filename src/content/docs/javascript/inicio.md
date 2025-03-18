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

# Ventajas y desventajas de JavaScript

## Introducción

Ahora que hemos visto para qué se puede usar JavaScript y algunas de sus características, echemos un vistazo más detallado a algunas de sus principales ventajas y desventajas.

No creo que haya un solo desarrollador de JavaScript que afirme que **JavaScript es un lenguaje de programación perfecto**. Pero, por otro lado, cada vez que escucho a alguien decir que JavaScript es un lenguaje de programación terrible (risas), no puedo evitar pensar que probablemente no han trabajado mucho con él y que su opinión proviene de algún video de YouTube que vieron.

## Ventajas de JavaScript

### **1. Popularidad**

Uno de los principales puntos positivos de JavaScript es su **popularidad**. Hay una enorme cantidad de ofertas de trabajo relacionadas con JavaScript en empresas de todo el mundo. Además, JavaScript tiene un ecosistema de desarrolladores **muy grande y activo**.

Por lo general, JavaScript es uno de esos lenguajes en los que puedes buscar incluso los errores y problemas más extraños en Google y encontrar respuestas detalladas. Además, puedes encontrar **librerías existentes para prácticamente cualquier funcionalidad que no quieras escribir desde cero**. Todo esto es posible gracias a **NPM**.

### **2. NPM y la facilidad de instalación de librerías**

NPM facilita enormemente la búsqueda e instalación de librerías que otras personas han desarrollado para incluirlas en tus proyectos de JavaScript. Más adelante en el curso, veremos algunos ejemplos de cómo instalar y usar estas librerías.

### **3. Facilidad de aprendizaje y uso**

Otra razón por la que JavaScript se ha vuelto tan popular es que **es relativamente fácil de aprender y usar**. Como la mayoría de los lenguajes, tiene detalles complejos y sutilezas, pero lo cierto es que **el tiempo necesario para escribir y ejecutar un programa en JavaScript es generalmente muy corto**.

Más adelante veremos cómo usar JavaScript para crear aplicaciones simples, y verás lo fácil que es empezar a trabajar con él.

### **4. Versatilidad**

Otra gran ventaja de JavaScript es que **se puede usar para desarrollar aplicaciones en una amplia variedad de plataformas**. No está limitado al **front-end**, **back-end** o **dispositivos móviles**, sino que se puede utilizar en todos estos ámbitos.

Me gusta pensar en JavaScript como el **inglés del mundo de la programación**. Puede ser un idioma extraño a veces y pocos dirían que es el mejor lenguaje en términos de diseño, pero en cuanto a **las oportunidades que te abre**, es difícil de superar.

Si quieres aprender **un solo lenguaje de programación** que te permita desarrollar **aplicaciones web, servidores, aplicaciones móviles, etc.**, **JavaScript es una excelente opción**.

### **5. Ejecución en el cliente y reducción de carga en el servidor**

Otra ventaja clave de JavaScript es que nos permite **reducir la carga en nuestro servidor** al trasladar la ejecución del código al cliente.

Dado que **todos los navegadores modernos pueden ejecutar JavaScript**, en lugar de hacer todos los cálculos y la lógica en nuestros propios servidores (que debemos pagar y mantener), **podemos enviar el programa al navegador del usuario y hacer que él lo ejecute**.

Esto nos permite distribuir la ejecución de los programas de manera más eficiente.

## Desventajas de JavaScript

### **1. Incompatibilidades entre navegadores**

Uno de los principales inconvenientes de JavaScript, especialmente en el desarrollo **front-end**, es que **el código debe funcionar en una amplia variedad de navegadores**.

En la práctica, esto **no suele ser un problema tan grande**, pero sigue siendo molesto cuando aparecen **errores que solo ocurren en versiones antiguas de Internet Explorer**, por ejemplo. Esto es algo con lo que los desarrolladores de JavaScript deben lidiar, pero que no es tan común en otros lenguajes de programación.

### **2. Seguridad**

Cuando trabajamos con JavaScript, debemos ser **más conscientes de la seguridad** en comparación con otros lenguajes. Hay varias razones para esto:

- Como JavaScript es un **lenguaje interpretado**, en el caso del **front-end**, **el código fuente de nuestra aplicación es visible en el navegador del usuario**.
- Cualquier persona que quiera **explotar vulnerabilidades en nuestro sitio web puede examinar nuestro código fuente**, de la misma manera en que lo haría un desarrollador que trabaja en la empresa.

Puedes comprobarlo tú mismo en cualquier página web: si abres las **herramientas para desarrolladores del navegador**, encontrarás una pestaña llamada **Sources** que muestra todo el código del lado del cliente de esa página.

### **3. Dependencia de librerías de terceros**

El uso de **librerías de terceros** es extremadamente común en JavaScript. Esto **puede ser un problema de seguridad**, ya que en lugar de atacar sitios web individuales, **los hackers pueden intentar vulnerar una librería popular** para comprometer muchas páginas a la vez.

Un buen ejemplo de esto es el grupo **[Magecart](https://www.akamai.com/es/blog/security/magecart-attack-disguised-as-google-tag-manager)**, que logró **robar datos de tarjetas de crédito** al atacar las librerías de carritos de compra que utilizaban muchas tiendas en línea. Los desarrolladores de estos sitios **no tenían control sobre las vulnerabilidades en esas librerías**, lo que es un problema preocupante.

### **4. Extrañas peculiaridades del lenguaje**

JavaScript tiene **ciertas características raras** que pueden confundir a los principiantes. Muchas de estas peculiaridades **no tienen mucho sentido al principio**, pero con el tiempo entenderás por qué ocurren.

Si tienes curiosidad, existe un repositorio en GitHub llamado **[wtfjs](https://github.com/denysdovhan/wtfjs)** que recopila una lista de los comportamientos más extraños de JavaScript, junto con explicaciones detalladas de por qué ocurren.

### **5. Cambios constantes en el lenguaje**

Una de las quejas más comunes de los nuevos programadores en JavaScript es que **el lenguaje cambia demasiado rápido**. Esto puede ser frustrante, ya que muchas respuestas que encuentras en línea **pueden estar desactualizadas o escritas de una manera que ya no se usa**.

Además, el ecosistema de JavaScript está lleno de **jerga técnica** relacionada con diferentes librerías y frameworks, cada uno con su propio ritmo de actualización.



# Comentarios en JavaScript

Los comentarios son una parte ampliamente utilizada en prácticamente cualquier lenguaje de programación. En JavaScript, se pueden definir de dos formas:

- **Comentarios de una sola línea**: Se usan dos barras diagonales (`//`). Todo lo que venga después de `//` será tratado como un comentario y no será ejecutado por el código.
- **Comentarios de múltiples líneas**: Se utilizan `/*` para abrir el comentario y `*/` para cerrarlo. Cualquier contenido entre estos símbolos será tratado como un comentario.

Ejemplo:

```
// Esto es un comentario de una sola línea

/*
Esto es un comentario de múltiples líneas.
Puedes escribir tantas líneas como necesites.
*/
```

Los comentarios son útiles para describir partes del código que pueden ser difíciles de entender o para ayudar a otros desarrolladores (o a ti mismo en el futuro) a recordar qué hace cierta parte del código.

# Imprimir en la consola con `console.log`

La función `console.log()` es una forma útil de depurar código en JavaScript, ya que permite imprimir mensajes en la consola del navegador o del entorno de ejecución (como Node.js).

Ejemplo:

```
console.log("Hola, mundo!");
```

La ubicación donde se muestra la salida depende de dónde estemos ejecutando JavaScript:

- **En el navegador**: Se imprimirá en la consola de herramientas para desarrolladores (DevTools).
- **En Node.js**: Se imprimirá en la terminal o consola donde se esté ejecutando el script.

Ejemplo en la consola del navegador:

```
console.log("Este mensaje aparecerá en la consola del navegador");
```

Ejemplo en Node.js:

```
console.log("Este mensaje aparecerá en la terminal");
```

# 




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

