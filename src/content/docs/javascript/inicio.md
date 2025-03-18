---
title: Introducción a JavaScript
description: Introducción a JavaScript.
---
# JavaScript
## Introducción
"**Vanilla JavaScript**" es simplemente JavaScript sin ninguna libreria.
:::note
Universo JavaScript
- [Node.js](https://nodejs.org/es): Permite ejecutar JS fuera del navegador, i.e. en un servidor (Backend).
- [npm](https://www.npmjs.com/) (node package manager): Plataforma Open Source para publicar y compartir código/herramientas hechas con JS (Backend).
- [mongoDB](https://www.mongodb.com/): BBDD no relacional que almacena objetos JS (Backend).
- [React Native](https://reactnative.dev/) & [NativeScript](https://nativescript.org/): Frameworks de JS para crear apps en iOS y Androi.
- [Electron](https://www.electronjs.org/): Framework para construir aplicaciones de escritorio con JS (ej. Slack).
:::
**JavaScript ≠ Java**  
| JavaScript  | Java |
| ------------- | ------------- |
| - Lenguaje interpretado  | - Lenguaje compilado |
| - Tipado dinámico| - Tipado estático|
| - Tipado débil| - Tipado fuerte|
| | | 

**Tipado dinámico**  
Se ejecuta el programa y entonces se comprueban los tipos.
```javascript
let x = 5; // JavaScript (tipado dinámico)
```
**Tipado estático**  
Se comprueban los tipos y entonces se ejecuta el programa.
```java
int x = 5; // Java (tipado estático)
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

#### JavaScript y la Programación Orientada a Objetos

JavaScript es un lenguaje **principalmente orientado a objetos**, aunque de una forma más flexible que otros lenguajes como Java o C++.

Esto significa que **JavaScript admite los conceptos básicos de la Programación Orientada a Objetos (POO)**, como:

- **Objetos y clases** para modelar problemas.
- **Reutilización de código** mediante prototipos y herencia.

Sin embargo, si vienes de un lenguaje donde la POO es central (como Java), es posible que encuentres JavaScript **menos estructurado para ciertos usos orientados a objetos**. Por ejemplo, **no hay una forma nativa de definir atributos privados en una clase**, lo que puede hacer que la encapsulación sea más complicada.

#### JavaScript es un lenguaje de un solo hilo

Otro punto importante es que **JavaScript es un lenguaje de un solo hilo (single-threaded)**. Esto significa que **solo puede ejecutar una operación a la vez** en un determinado momento.

En contraste, lenguajes como Java permiten **ejecución concurrente y paralela** mediante hilos (`threads`). Esto hace que JavaScript **no sea ideal para tareas intensivas en procesamiento de datos**.

Por ejemplo, si llamas a la función `alert()` en un navegador:

```javascript
alert("Hola mundo");
```

El código **se detendrá hasta que el usuario cierre la alerta**, bloqueando la ejecución del resto del programa. Este tipo de comportamiento puede ser problemático en aplicaciones con muchas interacciones en tiempo real.

Para resumir, JavaScript tiene las siguientes características clave:

1. **Es un lenguaje interpretado**, no compilado.
2. **Es dinámicamente y débilmente tipado**:
   - El tipo de las variables se determina en tiempo de ejecución.
   - No impone restricciones estrictas sobre los tipos de datos.
3. **Es un lenguaje principalmente orientado a objetos**, aunque con menos restricciones que otros lenguajes como Java.
4. **Es de un solo hilo**, lo que significa que solo ejecuta una tarea a la vez, lo que puede afectar su rendimiento en operaciones complejas.

## Ventajas y desventajas de JavaScript

### Ventajas de JavaScript

#### **1. Popularidad**

Uno de los principales puntos positivos de JavaScript es su **popularidad**. Hay una enorme cantidad de ofertas de trabajo relacionadas con JavaScript en empresas de todo el mundo. Además, JavaScript tiene un ecosistema de desarrolladores **muy grande y activo**.

Por lo general, JavaScript es uno de esos lenguajes en los que puedes buscar incluso los errores y problemas más extraños en Google y encontrar respuestas detalladas. Además, puedes encontrar **librerías existentes para prácticamente cualquier funcionalidad que no quieras escribir desde cero**. Todo esto es posible gracias a **NPM**.

#### **2. NPM y la facilidad de instalación de librerías**

NPM facilita enormemente la búsqueda e instalación de librerías que otras personas han desarrollado para incluirlas en tus proyectos de JavaScript. Más adelante en el curso, veremos algunos ejemplos de cómo instalar y usar estas librerías.

#### **3. Facilidad de aprendizaje y uso**

Otra razón por la que JavaScript se ha vuelto tan popular es que **es relativamente fácil de aprender y usar**. Como la mayoría de los lenguajes, tiene detalles complejos y sutilezas, pero lo cierto es que **el tiempo necesario para escribir y ejecutar un programa en JavaScript es generalmente muy corto**.

#### **4. Versatilidad**

Otra gran ventaja de JavaScript es que **se puede usar para desarrollar aplicaciones en una amplia variedad de plataformas**. No está limitado al **front-end**, **back-end** o **dispositivos móviles**, sino que se puede utilizar en todos estos ámbitos.

#### **5. Ejecución en el cliente y reducción de carga en el servidor**

Otra ventaja clave de JavaScript es que nos permite **reducir la carga en nuestro servidor** al trasladar la ejecución del código al cliente.

Dado que **todos los navegadores modernos pueden ejecutar JavaScript**, en lugar de hacer todos los cálculos y la lógica en nuestros propios servidores (que debemos pagar y mantener), **podemos enviar el programa al navegador del usuario y hacer que él lo ejecute**.

Esto nos permite distribuir la ejecución de los programas de manera más eficiente.

### Desventajas de JavaScript

#### **1. Incompatibilidades entre navegadores**

Uno de los principales inconvenientes de JavaScript, especialmente en el desarrollo **front-end**, es que **el código debe funcionar en una amplia variedad de navegadores**.

En la práctica, esto **no suele ser un problema tan grande**, pero sigue siendo molesto cuando aparecen **errores que solo ocurren en versiones antiguas de Internet Explorer**, por ejemplo. Esto es algo con lo que los desarrolladores de JavaScript deben lidiar, pero que no es tan común en otros lenguajes de programación.

#### **2. Seguridad**

Cuando trabajamos con JavaScript, debemos ser **más conscientes de la seguridad** en comparación con otros lenguajes. Hay varias razones para esto:

- Como JavaScript es un **lenguaje interpretado**, en el caso del **front-end**, **el código fuente de nuestra aplicación es visible en el navegador del usuario**.
- Cualquier persona que quiera **explotar vulnerabilidades en nuestro sitio web puede examinar nuestro código fuente**, de la misma manera en que lo haría un desarrollador que trabaja en la empresa.

Puedes comprobarlo tú mismo en cualquier página web: si abres las **herramientas para desarrolladores del navegador**, encontrarás una pestaña llamada **Sources** que muestra todo el código del lado del cliente de esa página.

#### **3. Dependencia de librerías de terceros**

El uso de **librerías de terceros** es extremadamente común en JavaScript. Esto **puede ser un problema de seguridad**, ya que en lugar de atacar sitios web individuales, **los hackers pueden intentar vulnerar una librería popular** para comprometer muchas páginas a la vez.

Un buen ejemplo de esto es el grupo **[Magecart](https://www.akamai.com/es/blog/security/magecart-attack-disguised-as-google-tag-manager)**, que logró **robar datos de tarjetas de crédito** al atacar las librerías de carritos de compra que utilizaban muchas tiendas en línea. Los desarrolladores de estos sitios **no tenían control sobre las vulnerabilidades en esas librerías**, lo que es un problema preocupante.

#### **4. Extrañas peculiaridades del lenguaje**

JavaScript tiene **ciertas características raras** que pueden confundir a los principiantes. Muchas de estas peculiaridades **no tienen mucho sentido al principio**, pero con el tiempo entenderás por qué ocurren.

Si tienes curiosidad, existe un repositorio en GitHub llamado **[wtfjs](https://github.com/denysdovhan/wtfjs)** que recopila una lista de los comportamientos más extraños de JavaScript, junto con explicaciones detalladas de por qué ocurren.

#### **5. Cambios constantes en el lenguaje**

Una de las quejas más comunes de los nuevos programadores en JavaScript es que **el lenguaje cambia demasiado rápido**. Esto puede ser frustrante, ya que muchas respuestas que encuentras en línea **pueden estar desactualizadas o escritas de una manera que ya no se usa**.

Además, el ecosistema de JavaScript está lleno de **jerga técnica** relacionada con diferentes librerías y frameworks, cada uno con su propio ritmo de actualización.






## Las Diferentes Versiones de JavaScript y su Nomenclatura

Uno de los temas que más confusión genera entre quienes inician en JavaScript es la gran cantidad de versiones y los diferentes nombres con los que se identifican.

### ¿Por qué es un tema confuso?

A diferencia de otros lenguajes de programación que utilizan una numeración clara en sus versiones, como **Java 14** o **Python 3.11**, JavaScript emplea nombres como **ES6**, **ES2015**, **ESNext**, entre otros, lo que dificulta la comprensión de su evolución.

Hoy en día, encontramos versiones como **ES15** y **ES2024**, pero, ¿qué significan realmente y por qué no hay simplemente un **JavaScript 5.2**, **JavaScript 6.1** o **JavaScript 7.0**?

### La Relación Entre Versiones y Entornos de Ejecución

Una de las razones por las cuales no hay una versión única de JavaScript es que este lenguaje puede ejecutarse en una amplia variedad de entornos, y no todos soportan las mismas características.

Por ejemplo, los navegadores **Google Chrome** y **Microsoft Edge** están desarrollados por diferentes compañías con prioridades distintas. Esto provoca que cada uno implemente características específicas de JavaScript en distintos momentos. Si además consideramos otros entornos como **Node.js**, la variabilidad en las versiones de JavaScript soportadas es aún mayor.

Dado que existen tantas implementaciones distintas del lenguaje, surge una pregunta clave:

**¿Cuál es el "JavaScript real"?**

La respuesta es que no existe un único JavaScript. En realidad, cada entorno de ejecución soporta un subconjunto de características del lenguaje, creando su propia versión funcional del mismo.

### El Papel de ECMAScript

Para mantener cierto orden, **ECMAScript** (también llamado **ECMA Script**) define un estándar oficial para JavaScript.

Cada versión de ECMAScript establece un conjunto de características mínimas que un entorno debe soportar para decir que es compatible con una versión en particular.

Por ejemplo, si un navegador afirma ser compatible con **ES6**, significa que implementa todas las características listadas en la especificación **ECMAScript 6**. Sin embargo, un navegador puede decidir añadir más características aparte de las que figuran en una versión específica.

Actualmente, la mayoría de los navegadores modernos soportan **ES5** y **ES6**, pero estamos mucho más allá de esas versiones. En 2024, la versión actual es **ES15**.

### ¿Por qué los Navegadores no Adoptan Todas las Versiones de ECMAScript de Inmediato?

Los navegadores no implementan todas las características de una versión de ECMAScript de golpe. En su lugar, adoptan ciertas funciones nuevas con el tiempo.

Cada nueva versión del lenguaje introduce mejoras y herramientas que facilitan el desarrollo. Sin embargo, para garantizar la compatibilidad, los navegadores suelen adoptar solo aquellas características que consideran prioritarias.

Afortunadamente, existen herramientas como **Babel**, que permiten escribir código en versiones modernas de JavaScript (como **ES14** o **ES15**) y lo convierten en código compatible con versiones anteriores que los navegadores pueden interpretar sin problemas.

------

### Nomenclatura de las Versiones de ECMAScript

Cada versión de ECMAScript tiene un nombre que la identifica.

##### Evolución de la Numeración

Inicialmente, las versiones seguían un esquema numérico simple:

- **ES1**, **ES2**, **ES3**, **ES4**, **ES5**, **ES6**, etc.

Sin embargo, a partir de **ES6**, se introdujo un cambio en la nomenclatura:

- **ES6** pasó a llamarse **ES2015**.
- **ES7** pasó a llamarse **ES2016**.
- Y así sucesivamente hasta **ES2024** (equivalente a **ES15**).

Por lo tanto, **ES6 y ES2015** son la misma versión, al igual que **ES7 y ES2016**, **ES15 y ES2024**, etc.

##### ¿Qué es ESNext?

El término **ESNext** se refiere a la próxima versión de ECMAScript que aún no ha sido lanzada.

Si la versión actual es **ES15**, entonces **ESNext** hace referencia a **ES16**, con todas las características que se están desarrollando y que aún no han sido formalmente añadidas al estándar.

------

## Dialectos de JavaScript

Además de las versiones de ECMAScript, existen varios **dialectos de JavaScript**, es decir, lenguajes derivados que introducen nuevas características, pero que eventualmente se convierten en JavaScript estándar antes de ejecutarse.

### **TypeScript**

**TypeScript** es el dialecto más popular de JavaScript. Su principal ventaja es que introduce **tipado estático**, lo que permite definir los tipos de variables y parámetros desde el inicio.

JavaScript es un lenguaje **dinámicamente tipado**, lo que significa que los tipos de datos se determinan durante la ejecución del código. Esto es útil para la flexibilidad, pero puede generar problemas en proyectos grandes o en equipos de trabajo.

Ejemplo en JavaScript:

```javascript
function add(a, b) {
  return a + b;
}
```

El código anterior puede aceptar cualquier tipo de dato, lo que puede generar errores inesperados.

Ejemplo en TypeScript:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Aquí, TypeScript asegura que `a` y `b` deben ser números y que la función siempre retornará un número.

Dado que los navegadores no pueden ejecutar TypeScript directamente, el código debe **transpilarse** (convertirse) a JavaScript antes de ejecutarse.

### **CoffeeScript**

Otro dialecto popular es **CoffeeScript**, que simplifica la sintaxis de JavaScript eliminando muchas llaves `{}` y mejorando la legibilidad del código.

Ejemplo en JavaScript:

```javascript
const square = function(x) {
  return x * x;
};
```

Ejemplo en CoffeeScript:

```coffeescript
square = (x) -> x * x
```

Aunque CoffeeScript ofrece una sintaxis más limpia, su popularidad ha disminuido con los años debido a las mejoras nativas en JavaScript moderno.

### **Otros Dialectos de JavaScript**

Además de TypeScript y CoffeeScript, existen otros lenguajes derivados para propósitos específicos:

- **Elm**: Diseñado para programación funcional y visualización de datos.
- **LogicJS**: Permite programar en un estilo similar a Prolog dentro de JavaScript.
- **Dart**: Ofrece un enfoque más orientado a objetos que JavaScript y es utilizado principalmente en el framework **Flutter**.

## Fundamentos de la Sintaxis en JavaScript

Antes de profundizar en los **tipos de datos** y en la **sintaxis más avanzada** de JavaScript, hay algunos conceptos generales que debes conocer.

Estos son:

**1. La sintaxis básica para escribir sentencias en JavaScript**  
**2. Cómo escribir comentarios en JavaScript**  
**3. Cómo imprimir mensajes en la consola**  


------

### **1. Sentencias en JavaScript**

Una **sentencia** en JavaScript es simplemente un fragmento de código que realiza una acción.

Por ejemplo, asignar un valor a una variable es una sentencia:

```javascript
let x = 5;
```

#### **Uso de punto y coma**

JavaScript permite escribir sentencias con o sin punto y coma (`;`). Esto ha generado debates dentro de la comunidad de desarrolladores sobre si es mejor usarlo o no.

Algunas personas prefieren siempre colocar punto y coma para mayor claridad y evitar errores inesperados, mientras que otros optan por omitirlo. Lo más importante es ser **consistente** en la forma en que escribes tu código.

La única excepción donde la mayoría de los desarrolladores no usa punto y coma es en **estructuras de control** como `if` o en la declaración de funciones:

```javascript
if (x > 0) {
  console.log("Número positivo");
}
```

#### **Dividir una sentencia en varias líneas**

Por lo general, las sentencias cortas se escriben en una sola línea. Sin embargo, cuando una sentencia es muy larga y queremos mejorar la **legibilidad**, podemos dividirla en varias líneas.

Ejemplo con una cadena de texto larga:

```javascript
let mensaje = "Este es un mensaje muy largo que "
  + "puede ser dividido en varias líneas "
  + "para mejorar la lectura.";
```

Esto es especialmente útil cuando trabajamos con **objetos** o **funciones con muchos argumentos**.

Ejemplo con un objeto en JavaScript:

```javascript 
let usuario = {
  nombre: "Carlos",
  edad: 30,
  correo: "carlos@email.com"
};
```

Si escribiéramos el objeto en una sola línea, sería mucho más difícil de leer.

------

### **2. Comentarios en JavaScript**

Los **comentarios** son una parte esencial de cualquier lenguaje de programación, ya que permiten explicar el código sin afectar su ejecución.

#### **Comentarios de una sola línea**

Se escriben usando `//`:

```javascript
// Esto es un comentario de una línea
let edad = 25; // Definiendo la variable edad
```

#### **Comentarios de múltiples líneas**

Para escribir comentarios que abarquen varias líneas, usamos `/* ... */`:

```javascript
/*
Este es un comentario 
de múltiples líneas
que puede ser útil para explicar bloques de código grandes.
*/
let precio = 100;
```

Los comentarios son útiles para explicar código complejo o proporcionar información adicional para otros desarrolladores (o para ti mismo en el futuro).

------

### **3. Imprimir mensajes en la consola**

Una de las maneras más comunes de depurar código en JavaScript es usar `console.log()`.

#### **Ejemplo básico**

```javascript 
console.log("Hola, mundo!");
```

Si ejecutamos este código en la consola del navegador, veremos el mensaje **"Hola, mundo!"** impreso en la consola.

#### **Ubicación de la consola en diferentes entornos**

JavaScript se puede ejecutar en distintos lugares, como el **navegador**, el **servidor (Node.js)** o en dispositivos móviles. Dependiendo del entorno, la consola puede estar en ubicaciones diferentes:

- En **navegadores web**, se accede a la consola mediante las **herramientas de desarrollo** (`F12` o `Ctrl + Shift + I`).
- En **Node.js**, los mensajes se imprimen en la **terminal del sistema operativo**.

Ejemplo en la consola del navegador:

```javascript 
console.log("Este mensaje aparece en la consola del navegador");
```

Ejemplo en **Node.js** (ejecutado desde una terminal):

```javascript 
console.log("Este mensaje aparece en la terminal");
```

Conocer `console.log()` es esencial para depurar código y entender mejor cómo funcionan nuestros programas.





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

