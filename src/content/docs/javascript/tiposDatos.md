---
title: Tipos de datos
description: Tipos de datos.
---

# **Tipos de Datos en JavaScript**


## **Definición de Variables y Constantes en JavaScript**

Antes de hablar de los tipos de datos, veamos cómo se **definen variables y constantes** en JavaScript.

### **1. Variables (`var` y `let`)**

Para definir variables en JavaScript, se utilizan las palabras clave **`var`** o **`let`**. Ambas permiten crear una nueva variable, pero hay una diferencia clave entre ellas:

- **`var`** → Tiene **ámbito de función** (*function scoped*).
- **`let`** → Tiene **ámbito de bloque** (*block scoped*).

En la mayoría de los casos, **`let` es la opción recomendada** porque respeta el alcance del bloque en el que se declara, lo que hace que el código sea más predecible.

```javascript
let nombre = "Carlos"; // Variable con ámbito de bloque
var edad = 25;         // Variable con ámbito de función
```

------

### **2. Constantes (`const`)**

Para definir una **constante**, usamos la palabra clave **`const`**. Una vez que se ha asignado un valor a una constante, este **no puede ser reasignado**.

```javascript
const PI = 3.1416; // No se puede cambiar su valor
```

:::caution
Aunque `const` impide la reasignación de valores, los objetos y arrays definidos con `const` pueden ser modificados internamente.

```javascript
const usuario = { nombre: "Ana" };
usuario.nombre = "María"; // Esto es válido, porque estamos cambiando una propiedad del objeto.
```
:::

### **3. Definir Variables Sin `var`, `let` o `const`** (¡Evítalo!)

En algunos lenguajes como Python o PHP, es común definir variables sin palabras clave especiales.

En JavaScript, esto **también es posible**, pero debes evitarlo, porque crea **una variable global automáticamente**. Esto puede generar problemas en tu código.

```javascript
x = 10; // ⚠️ No recomendado: Crea una variable global
```

✅ **Mejor usa `let` o `const` para evitar errores**:

```javascript
let x = 10; // Correcto
const y = 20; // Correcto
```

------



### **Variables sin Tipo Fijo**

En JavaScript, **las variables no tienen un tipo definido**. En su lugar, el **tipo depende del valor que almacenan en un momento dado**.

Ejemplo:

```javascript
let x = 5;       // x es un número
x = "Hola";      // Ahora x es una cadena (string)
```

💡 **Regla clave**:
 *"En JavaScript, las variables no tienen tipos, solo los valores tienen tipos."*

------
## **Los 8 Tipos de Datos en JavaScript**

JavaScript tiene **8 tipos de datos**:

1. **Number**
2. **String**
3. **Boolean**
4. **Object**
5. **Function**
6. **Undefined**
7. **BigInt**
8. **Symbol**

### **El Operador `typeof`**

JavaScript proporciona el operador **`typeof`**, que permite verificar el tipo de cualquier variable o valor.

Ejemplo:

```javascript
let x = 42;
let y = "Hola";

console.log(typeof x); // "number"
console.log(typeof y); // "string"
```

Este operador es muy útil para depurar código y entender el tipo de dato con el que estamos trabajando.

## **Números en JavaScript**

El primer tipo de dato en JavaScript es el **número** (`Number`). Dependiendo del lenguaje del que vengas, es posible que la forma en que JavaScript maneja los números te parezca más sencilla.

A diferencia de otros lenguajes que diferencian entre **enteros** y **números de punto flotante**, en JavaScript **todos los números son del mismo tipo** (`Number`).

Ejemplo:

```javascript
let x = 5;           // Número entero
let pi = 3.1415;     // Número decimal
let negativo = -10;  // Número negativo
```

Sin embargo, existe un tipo especial para **números extremadamente grandes**, llamado **BigInt**, que veremos más adelante.

------

### **Formas de Definir Números en JavaScript**

Aunque la notación decimal es la más común, JavaScript permite definir números en distintos formatos:

#### **1. Números en Hexadecimal, Binario y Octal**

Desde **ES6**, se pueden definir números en distintas bases:

```javascript
let hex = 0x1F;   // 31 en decimal (Hexadecimal, prefijo "0x")
let bin = 0b1010; // 10 en decimal (Binario, prefijo "0b")
let oct = 0o7;    // 7 en decimal (Octal, prefijo "0o")
```

#### **2. Notación Científica**

Para representar números muy grandes o pequeños, se puede usar **notación científica**:

```javascript
let grande = 6e7;   // 6 * 10^7 = 60000000
let pequeño = 4e-3; // 4 * 10^-3 = 0.004
```

------

### **Valores Especiales: `NaN` e `Infinity`**

Existen dos valores especiales en JavaScript relacionados con los números:

#### **1. `NaN` (Not a Number)**

Si intentamos hacer operaciones matemáticas con valores no numéricos, obtenemos `NaN`:

```javascript
let resultado = 10 * "Hola"; // NaN
console.log(resultado);      // Output: NaN
```

💡 `NaN` es un valor especial que indica un error en una operación matemática. **No genera un error en la ejecución, pero significa que algo no salió bien.**

#### **2. `Infinity` y `-Infinity`**

Si realizamos una operación que produce un número demasiado grande o intentamos dividir entre **cero**, obtenemos `Infinity`:

```javascript
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log(10 ** 999);    // Infinity
```

⚠️ **Tanto `NaN` como `Infinity` son considerados números en JavaScript:**

```javascript
console.log(typeof NaN);      // "number"
console.log(typeof Infinity); // "number"
```

------

## **Operaciones Matemáticas en JavaScript**

JavaScript permite realizar las operaciones matemáticas básicas:

```javascript
let suma = 5 + 3;        // 8
let resta = 10 - 4;      // 6
let multiplicacion = 6 * 3; // 18
let division = 10 / 2;   // 5
let modulo = 10 % 3;     // 1 (resto de la división)
let exponente = 2 ** 3;  // 8 (2^3)
```

Además, JavaScript ofrece el **objeto `Math`**, que contiene muchas funciones útiles:

```javascript
console.log(Math.sqrt(16));  // 4 (raíz cuadrada)
console.log(Math.abs(-10));  // 10 (valor absoluto)
console.log(Math.max(5, 10, 15));  // 15 (mayor valor)
console.log(Math.min(5, 10, 15));  // 5 (menor valor)
console.log(Math.round(4.6)); // 5 (redondeo)
console.log(Math.floor(4.9)); // 4 (redondeo hacia abajo)
console.log(Math.ceil(4.1));  // 5 (redondeo hacia arriba)
console.log(Math.sin(Math.PI / 2)); // 1 (seno de 90°)
```

------

## **Precisión de los Números en JavaScript**

### **1. Todos los Números son de 64 Bits**

En JavaScript, **todos los números se almacenan como valores de coma flotante de 64 bits** según el estándar **IEEE 754**.

Esto significa que los números grandes pierden precisión después de 15-16 dígitos:

```javascript
let num = 9999999999999999; // 16 dígitos
console.log(num);  // 10000000000000000 (redondeado)
```

### **2. Errores con Decimales**

Los números de punto flotante pueden generar errores inesperados:

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.3 === 0.1 + 0.2); // false
```

💡 **Solución:** Multiplicar por 10 y redondear:

```javascript
let resultado = Math.round((0.1 + 0.2) * 100) / 100;
console.log(resultado); // 0.3
```

------

## **Resumen numbers**

- JavaScript **no distingue** entre enteros y flotantes; todos son del tipo `Number`.
- Soporta diferentes bases numéricas como **decimal, hexadecimal, binario y octal**.
- Existen valores especiales: **`NaN`** (resultado inválido) e **`Infinity`** (valor fuera de los límites).
- El **objeto `Math`** proporciona funciones matemáticas avanzadas.
- Los números grandes pierden precisión y los **decimales pueden dar errores de cálculo**.

--------
# **Cadenas de Texto (Strings) en JavaScript**

Ahora que hemos visto lo fundamental sobre los **números en JavaScript**, pasemos al siguiente tipo de dato: **las cadenas de texto (Strings)**.

Las cadenas en JavaScript son **similares a las de otros lenguajes**: simplemente representan una serie de caracteres.

------

## **Cómo Definir Cadenas en JavaScript**

En JavaScript, una cadena se puede definir utilizando **tres tipos de comillas**:

### **1. Comillas Simples y Dobles**

```javascript
let mensaje1 = 'Hola, mundo';  // Comillas simples
let mensaje2 = "Hola, mundo";  // Comillas dobles
```

Ambas opciones son válidas y no hay diferencia funcional. Lo importante es **ser consistente** en todo el código.

### **2. Template Literals (Backticks - ` )**

Desde **ES6**, se pueden usar **backticks (`)** para definir cadenas.

```javascript 
let nombre = "Ana";
let saludo = `Hola, ${nombre}!`; // Interpolación de variables
console.log(saludo); // Output: Hola, Ana!
```

💡 **Ventaja de los backticks:** Permiten **interpolación de variables** (introducir una variable dentro de un string) y pueden contener **saltos de línea sin necesidad de caracteres especiales**.

------

## **Propiedades y Métodos de Strings**

Las cadenas en JavaScript tienen varias **propiedades y métodos útiles**.

### **1. Propiedad `length` (Longitud de la Cadena)**

```javascript 
let texto = "JavaScript";
console.log(texto.length); // Output: 10
```

### **2. Obtener un Carácter con `charAt()`**

```javascript


 
console.log(texto.charAt(3)); // Output: a
```

### **3. Convertir a Mayúsculas y Minúsculas**

```javascript 
console.log(texto.toUpperCase()); // "JAVASCRIPT"
console.log(texto.toLowerCase()); // "javascript"
```

### **4. Otras Funciones Útiles**

```javascript 
console.log(texto.includes("Script")); // true (verifica si contiene "Script")
console.log(texto.startsWith("Java")); // true (verifica si empieza con "Java")
console.log(texto.endsWith("Java"));   // false (verifica si termina con "Java")
```

------

## **Uso de Caracteres Especiales en Strings**

Algunas veces necesitamos incluir caracteres especiales en una cadena, como comillas o saltos de línea.

### **1. Uso del Carácter de Escape (`\`)**

Si queremos usar comillas dentro de una cadena definida con las mismas comillas, necesitamos un **carácter de escape (`\`)**:

```javascript 
let frase = "Ella dijo: \"JavaScript es genial!\"";
console.log(frase);
```

### **2. Alternativa: Usar Diferentes Tipos de Comillas**

```javascript 
let frase2 = 'Ella dijo: "JavaScript es genial!"';
console.log(frase2);
```

### **3. Caracteres Especiales Comunes**

| Secuencia | Significado           |
| --------- | --------------------- |
| `\n`      | Nueva línea           |
| `\t`      | Tabulación            |
| `\\`      | Barra invertida (`\`) |

Ejemplo:

```javascript 
let mensaje = "Línea 1\nLínea 2";
console.log(mensaje);
```

Output:

```
Línea 1
Línea 2
```

------

## **Concatenación de Cadenas**

### **1. Usando el Operador `+`**

```javascript 
let saludo = "Hola" + " " + "mundo!";
console.log(saludo); // Output: Hola mundo!
```

### **2. Usando el Método `.concat()`**
```javascript 
let parte1 = "Hola";
let parte2 = "mundo!";
console.log(parte1.concat(" ", parte2)); // Output: Hola mundo!
```

------

## **Precauciones al Concatenar Strings con Números**

En JavaScript, puedes concatenar cadenas y números sin necesidad de conversión previa:
```javascript 
let edad = 25;
console.log("Tengo " + edad + " años."); // Output: Tengo 25 años.
```

Sin embargo, el **orden de las operaciones importa**:

```javascript 
let x = 5;
let y = 8;
console.log("x + y es " + x + y); // Output: "x + y es 58"
```

💡 **¿Por qué sucede esto?**
 JavaScript evalúa las expresiones de **izquierda a derecha**.

- Primero concatena `"x + y es "` con `x` → `"x + y es 5"`.
- Luego concatena con `y` → `"x + y es 58"`.

✅ **Solución:** Usar paréntesis para forzar la operación matemática primero:

```javascript

 
console.log("x + y es " + (x + y)); // Output: "x + y es 13"
```

------

## **Resumen Strings**

- JavaScript permite definir cadenas con **comillas simples, dobles o backticks (`)**.
- Se pueden **concatenar** con `+` o `.concat()`.
- Usa `\` para caracteres especiales como `\"`, `\'`, `\n`.
-**Ten cuidado** al concatenar cadenas con números, ya que el orden afecta el resultado.


# **Valores Booleanos en JavaScript**

El tercer tipo de dato en JavaScript es el **Booleano** (`Boolean`). Al igual que en la mayoría de los lenguajes de programación, un **booleano** solo tiene **dos valores posibles**:

- `true` (verdadero)
- `false` (falso)

Estos valores pueden ser **asignados directamente** o generados como resultado de una **comparación lógica**.

```javascript 
let esMayor = true; // Asignación directa
let resultado = 5 > 3; // Comparación (true)
```

------

## **Uso de Booleanos en la Lógica de Programación**

Los valores booleanos son esenciales para controlar el flujo de ejecución en un programa, especialmente con **estructuras de control** como:

- `if`
- `while`
- Operador ternario (`condition ? trueValue : falseValue`)

Ejemplo con `if`:

```javascript
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

Ejemplo con `while`:

```javascript 
let contador = 0;
while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}
```

Ejemplo con operador ternario (`condition ? trueValue : falseValue`):

```javascript 
let mensaje = edad >= 18 ? "Adulto" : "Menor";
console.log(mensaje); // "Adulto"
```

------

## **Valores "Truthy" y "Falsy" en JavaScript**

Aunque solo existen los valores `true` y `false`, **JavaScript permite convertir otros valores a booleanos**.

Existen valores que se consideran **"truthy"** (se interpretan como `true`) y otros que son **"falsy"** (se interpretan como `false`).

| **Valores "Falsy"** (equivalentes a `false`) |
| -------------------------------------------- |
| `""` (cadena vacía)                          |
| `0` (número cero)                            |
| `NaN` (Not a Number)                         |
| `0n` (`BigInt` con valor cero)               |
| `null`                                       |
| `undefined`                                  |
| `false`                                      |

Cualquier otro valor en JavaScript es considerado **"truthy"** y se evalúa como `true`.

Ejemplo con `if` y un valor "falsy":

```javascript 
if ("") {
    console.log("Esto no se ejecuta"); 
} else {
    console.log("Esto sí se ejecuta"); // Se ejecuta porque "" es falsy
}
```

Ejemplo con un valor "truthy":

```javascript 
if ("Hola") {
    console.log("Esto se ejecuta"); // Se ejecuta porque "Hola" es truthy
}
```

------

## **Conversión de Valores a Booleanos**

Para verificar cómo un valor se evalúa en términos booleanos, podemos usar la función `Boolean()` o el operador `!!`.

```javascript 
console.log(Boolean("Hola"));  // true (truthy)
console.log(Boolean(""));      // false (falsy)
console.log(Boolean(123));     // true (truthy)
console.log(Boolean(0));       // false (falsy)
console.log(Boolean(null));    // false (falsy)
console.log(Boolean(undefined)); // false (falsy)
```

Otra forma rápida de convertir a booleano es con `!!` (doble negación lógica):

```javascript 
console.log(!!"Hola");   // true
console.log(!!0);        // false
```

------

## **Resumen Booleans**

- JavaScript solo tiene **dos valores booleanos:** `true` y `false`.
- Las **estructuras de control** (`if`, `while`, operadores ternarios) dependen de booleanos.
- Algunos valores se evalúan como **"truthy"** (equivalentes a `true`) y otros como **"falsy"** (`false`).
- Puedes convertir cualquier valor a booleano con `Boolean(valor)` o `!!valor`.


# Objetos en JavaScrip5
## **Definición de Objetos**

Un objeto en JavaScript es **una colección de pares clave-valor**. Cada **clave** (o propiedad) está asociada a un **valor** que puede ser de cualquier tipo de dato en JavaScript, incluyendo números, cadenas, booleanos, funciones e incluso otros objetos.

### **Ejemplo de Objeto**

```javascript 
let persona = {
    nombre: "Carlos",
    edad: 30,
    colorOjos: "marrón"
};
```

Los objetos en JavaScript son esenciales para **organizar y estructurar datos**.

Si alguna vez has trabajado con **JSON (JavaScript Object Notation)**, entonces ya has interactuado con objetos de JavaScript.

------

## **Acceder a Propiedades de un Objeto**

Existen **dos formas principales** de acceder a las propiedades de un objeto:

### **1. Notación de punto (`.`)**

```javascript 
console.log(persona.nombre);  // Output: "Carlos"
console.log(persona.edad);    // Output: 30
console.log(persona.colorOjos); // Output: marrón
```

### **2. Notación de corchetes (`[]`)**

```javascript
console.log(persona["nombre"]); // Output: "Carlos"
console.log(persona["edad"]);   // Output: 30
console.log(persona["colorOjos"]);  // OUtput: marron
```

:::note
**¿Cuándo usar corchetes?**

- Cuando el **nombre de la propiedad** está almacenado en una variable:

```javascript 
let propiedad = "colorOjos";
console.log(persona[propiedad]); // Output: "marrón"
```

- Cuando la propiedad contiene **espacios o caracteres especiales**:

```javascript 
let empleado = { "job-title": "Desarrollador" };
console.log(empleado["job-title"]); // Output: "Desarrollador"
```

(No podríamos usar `empleado.job-title` porque el guion `-` no es válido en identificadores).

:::

------

## **Modificar Propiedades de un Objeto**

Podemos cambiar los valores de un objeto después de haberlo definido:
```javascript 
persona.edad = 31;
persona["colorOjos"] = "verde";

console.log(persona.edad); // Output: 31
console.log(persona.colorOjos); // Output: "verde"
```

También podemos **agregar nuevas propiedades** dinámicamente:

```javascript 
persona.altura = 1.75;
console.log(persona.altura); // Output: 1.75
```

O eliminar propiedades usando `delete`:

```javascript
delete persona.colorOjos;
console.log(persona.colorOjos); // Output: undefined
```

------

## **Objetos Anidados y Arrays Dentro de Objetos**

Los valores de un objeto pueden ser **otros objetos o arrays**:

```javascript
let usuario = {
    nombre: "Ana",
    direccion: {
        calle: "Av. Principal",
        ciudad: "Madrid"
    },
    hobbies: ["leer", "correr", "viajar"]
};

console.log(usuario.direccion.calle); // Output: "Av. Principal"
console.log(usuario.hobbies[0]);      // Output: "leer"
```

------

:::caution
## **Objetos por Referencia**

⚠️ **Los objetos en JavaScript se asignan por referencia, no por valor**.

Esto significa que cuando asignamos un objeto a una variable, esta variable no contiene realmente el objeto, sino **una referencia a la ubicación en memoria** donde el objeto está almacenado.

Ejemplo:

```javascript 
let persona1 = { nombre: "Carlos" };
let persona2 = persona1; // Ambas variables apuntan al mismo objeto

persona2.nombre = "Ana"; // Modificamos persona2, pero también afecta a persona1

console.log(persona1.nombre); // Output: "Ana"
console.log(persona2.nombre); // Output: "Ana"
```
En este caso al cambiar una propiedad en `persona2` también se cambiará en `persona1` debido a que los dos apuntan al mismo espacio en memoria en el que está el objeto.

Si queremos **crear una copia independiente del objeto**, debemos usar `Object.assign()` o el **operador spread (`...`)**:

```javascript 
let persona3 = { ...persona1 }; // Copia independiente
persona3.nombre = "Pedro";

console.log(persona1.nombre); // Output: "Ana"
console.log(persona3.nombre); // Output: "Pedro"
```
:::
------

## **Pasar Objetos a Funciones**

Cuando pasamos un objeto a una función, **se pasa por referencia**, por lo que cualquier modificación dentro de la función afectará al objeto original:

```javascript 
function cambiarEdad(persona) {
    persona.edad = 40;
}

let usuario1 = { edad: 25 };
cambiarEdad(usuario1);

console.log(usuario1.edad); // Output: 40
```

Si queremos evitar esto, podemos pasar **una copia** del objeto en su lugar:

```javascript 
function cambiarEdadSeguro(persona) {
    let copia = { ...persona };
    copia.edad = 40;
    return copia;
}

let usuario2 = { edad: 25 };
let nuevoUsuario = cambiarEdadSeguro(usuario2);

console.log(usuario2.edad);    // Output: 25
console.log(nuevoUsuario.edad); // Output: 40
```

------

## **Sintaxis Reducida para Crear Objetos**

Cuando una propiedad tiene el mismo nombre que una variable, podemos **simplificar la sintaxis**:

```javascript 
let nombre = "Carlos";
let edad = 30;

// En lugar de:
let persona4 = { 
    nombre: nombre, 
    edad: edad };

// Podemos escribir directamente:
let persona5 = { 
    nombre, 
    edad };
```

------

## **Propiedades con Caracteres Especiales**

Si una clave tiene caracteres especiales o espacios, **debe ir entre comillas**:

```javascript 
let empleado2 = { "job-title": "Diseñador UX" };
console.log(empleado2["job-title"]); // Output: "Diseñador UX"
```

En estos casos, debemos usar la notación de corchetes (`[]`) para acceder a la propiedad, ya que `empleado2.job-title` generaría un error.

------

## **El Valor `null` y los Objetos**

JavaScript tiene un valor especial llamado `null`, que se usa para indicar **ausencia de datos**:

```javascript 
let persona6 = null;
console.log(persona6); // Output: null
```

Sin embargo, hay una **peculiaridad en JavaScript**:

```javascript
 
console.log(typeof null); // Output: "object" (esto es un error histórico en JS)
```

Aunque `null` no es un objeto, JavaScript lo clasifica como tal por razones técnicas.

------

## **Resumen Objetos**
- **Los objetos** en JavaScript son colecciones de pares clave-valor.
- Se pueden **acceder, modificar y eliminar propiedades** con `.` o `[]`.
- **Los objetos se asignan por referencia**, lo que significa que modificar uno puede afectar a otros.
- Se pueden **anidar objetos** y **almacenar arrays dentro de objetos**.
- Podemos usar **sintaxis reducida** (`{ nombre, edad }`) cuando las claves y variables tienen el mismo nombre.
- **Propiedades con caracteres especiales** requieren comillas y deben accederse con `[]`.
- **`null` se usa para indicar ausencia de datos**, aunque `typeof null` retorna `"object"` por un error histórico en JavaScript.

-------

# **Arrays en JavaScript**
## **¿Qué es un array?**

En JavaScript, un **array es una colección ordenada de valores**, definida normalmente usando **corchetes**:

```javascript 
let frutas = ["manzana", "banana", "naranja"];
```

### Características:

- Puede contener **cualquier tipo de dato**: números, strings, objetos, booleanos, incluso otros arrays.
- **No es necesario que todos los elementos sean del mismo tipo**, a diferencia de lenguajes con tipado estático.

```javascript 
let mezcla = [
    42, 
    "texto", 
    true, 
    { nombre: "Ana" }, 
    [1, 2]
    ];
```

------

## **¿Por qué los arrays no están en la lista de tipos básicos?**

Técnicamente, **los arrays no son un tipo de dato independiente en JavaScript**, sino una **forma especializada del tipo `object`**.

Esto se puede verificar con el operador `typeof`:

```javascript
let frutas = ["manzana", "banana"];
console.log(typeof frutas); // "object"
```

💡 Aunque esto suele ser solo un **detalle técnico**, conviene tenerlo presente para evitar confusiones puntuales.

------

## **Acceder y modificar elementos**

Los elementos de un array se acceden por su **índice**, que empieza en **0**:

```javascript 
console.log(frutas[0]); // "manzana"
```

Se pueden modificar fácilmente:

```javascript
frutas[1] = "pera";
console.log(frutas); // ["manzana", "pera", "naranja"]
```

------

## **Propiedad `.length`**

Todos los arrays tienen una propiedad `.length` que indica **cuántos elementos contiene**:

```javascript
 
console.log(frutas.length); // 3
```

:::note
El último índice siempre será `.length - 1`.
:::

------

## **Métodos comunes de los arrays**

JavaScript incluye muchos métodos incorporados para trabajar con arrays. Algunos de los más usados son:

| Método       | Descripción                                                  |
| ------------ | ------------------------------------------------------------ |
| `.push()`    | Añade un elemento al final                                   |
| `.pop()`     | Elimina y retorna el último elemento                         |
| `.indexOf()` | Retorna el índice de un elemento (o `-1` si no existe)       |
| `.map()`     | Crea un nuevo array aplicando una función a cada elemento    |
| `.filter()`  | Crea un nuevo array con los elementos que cumplen una condición |
| `.sort()`    | Ordena los elementos del array                               |

------

## **¿Usar coma final (`trailing comma`) en arrays y objetos?**

Las comas finales (también llamadas trailing commas) pueden ser útiles al añadir nuevos elementos, parámetros o propiedades en código JavaScript.

```javascript
let frutas = [
  "manzana",
  "pera",
  "naranja", // ← coma final
];
```

Si deseas agregar una nueva propiedad, puedes simplemente añadir una nueva línea sin tener que modificar la última línea anterior, siempre que esa línea ya tenga una coma final. Esto hace que las diferencias en el control de versiones (diffs) sean más limpias y que editar el código sea menos problemático.

JavaScript permite **comas finales en literales de arrays** desde sus inicios.
 Actualmente, también se permiten en:
- Literales de objetos,
- Parámetros de funciones,
- Importaciones con nombre (`named imports`),
- Exportaciones con nombre (`named exports`), y más.
⚠️ Sin embargo, JSON no permite comas finales bajo ninguna circunstancia.

:::tip[ Sabias ...?]
En JavaScript, un literal es una forma directa y explícita de representar un valor en el código fuente, sin necesidad de usar funciones, clases, constructores u otras expresiones.

## Tipos comunes de **literales en JavaScript**

| Tipo de dato        | Ejemplo de literal                                           |
| ------------------- | ------------------------------------------------------------ |
| **Número**          | `42`, `3.14`, `-7`                                           |
| **Cadena (String)** | `"Hola"`, `'Mundo'`, ``Texto``                               |
| **Booleano**        | `true`, `false`                                              |
| **Array**           | `[1, 2, 3]`                                                  |
| **Objeto**          | `{ nombre: "Ana", edad: 30 }`                                |
| **Null**            | `null`                                                       |
| **Undefined**       | `undefined` (aunque no se usa como literal comúnmente)       |
| **BigInt**          | `123456789n`                                                 |
| **Symbol**          | `Symbol("etiqueta")` (no es un literal puro, pero se crea directamente) |

------

## **Ejemplos prácticos**

### Literal de número:

```javascript 
let edad = 25; // 25 es un literal numérico
```

### Literal de cadena:

```javascript 
let saludo = "Hola"; // "Hola" es un literal de string
```

### Literal de array:

```javascript 
let colores = ["rojo", "verde", "azul"];
```

### Literal de objeto:

```javascript 
let persona = {
  nombre: "Juan",
  edad: 40
};
```

------

## ¿Qué no es un literal?

```javascript 
let numero = new Number(42); // No es un literal: usa un constructor
let lista = new Array(1, 2, 3); // Tampoco: es una instancia creada con una función
```

------
## ¿Por qué son importantes los literales?

- Son la **forma más simple y directa** de crear datos.
- Se usan **todo el tiempo** en JavaScript.
- Son **más claros y legibles** que otras formas (como usar constructores).

------

:::


## **Resumen arrays**

- Los arrays son **colecciones ordenadas de elementos**.
- Pueden contener **cualquier tipo de dato** y elementos de tipos mezclados.
- Aunque **son técnicamente objetos**, su comportamiento es muy específico.
- Disponen de **métodos potentes** para manipulación avanzada de datos.
- Usar **comas finales** es opcional, pero recomendable para evitar errores de sintaxis.

------

# **Funciones en JavaScript**

## ¿Qué es una función?

Una **función** en JavaScript es un **bloque reutilizable de código** que puede:

- Recibir argumentos (parámetros)
- Devolver un valor (opcional)

```javascript 
function saludar(nombre) {
  return "Hola, " + nombre;
}
```

Una función puede no recibir parámetros, o no devolver nada, dependiendo del caso de uso.

------

## ¿Diferencias con otros lenguajes?

A diferencia de lenguajes como **Java**, en JavaScript las funciones **no necesitan pertenecer a una clase u objeto**.
 Pueden definirse de forma **independiente**:

```javascript 
function sumar(a, b) {
  return a + b;
}

add(2, 3); // Output: 5
```

------

## Formas de definir funciones

JavaScript permite **múltiples formas** de definir funciones:

### 1. **Declaración de función**

```javascript 
function sumar(x, y) {
  return x + y;
}
```

Estas funciones son **"hoisting-friendly"**

------

### 2. **Otro modo de declarar una función**

```javascript 
let suma = function(x, y) {
  return x + y;
};
```

Estas **no se pueden usar antes de ser declaradas**.

------

### 3. **Arrow functions (Funciones flecha)**

Introducidas en **ES6**, son una forma más corta de escribir funciones:

```javascript 
let suma = (a, b) => a + b;
```

También pueden tener cuerpo con `{}` y usar `return`:
```javascript 
let suma = (a, b) => {
  return a + b;
};
```

------
:::tip[Sabias ...]
## ¿Qué es el "hoisting"?

El **hoisting** es una característica de JavaScript donde **las declaraciones de funciones (solo las del tipo `function nombre()`) se "mueven" al inicio del archivo/instrucción**.

Esto permite usar una función antes de definirla:

```javascript 
saludar(); // Funciona

function saludar() {
  console.log("Hola");
}
```

❌ **Las funciones definidas con `const` o `let` no lo permiten**:

```javascript 
saludar(); // Error: Cannot access 'saludar' before initialization

const saludar = function() {
  console.log("Hola");
};
```
:::
------

## Llamar a una función

Para **ejecutar** una función, simplemente se escribe su nombre seguido de paréntesis:

```javascript
 
sumar(2, 3); // Llama a la función 'sumar' con los argumentos 2 y 3
```

Si la función no necesita argumentos:

```javascript
 
saludar(); // Llama a la función sin argumentos
```

------

## Resumen de funciones

- Las funciones son **bloques reutilizables de código**.
- Pueden definirse con `function`, como expresiones (`let f = function()`) o con **arrow functions** (`=>`).
- Solo las funciones definidas con `function` son **"hoisted"**.
- Se llaman usando `nombreFuncion()` con o sin argumentos.
- Las funciones pueden o no devolver un valor (`return` es opcional).

