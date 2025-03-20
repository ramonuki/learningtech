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
------

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

## **El Operador `typeof`**

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

## **Resumen**

🔹 JavaScript **no distingue** entre enteros y flotantes; todos son del tipo `Number`.
 🔹 Soporta diferentes bases numéricas como **decimal, hexadecimal, binario y octal**.
 🔹 Existen valores especiales: **`NaN`** (resultado inválido) e **`Infinity`** (valor fuera de los límites).
 🔹 El **objeto `Math`** proporciona funciones matemáticas avanzadas.
 🔹 Los números grandes pierden precisión y los **decimales pueden dar errores de cálculo**.




