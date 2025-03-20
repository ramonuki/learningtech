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

⚠️ **Importante**: Aunque `const` impide la reasignación de valores, los objetos y arrays definidos con `const` pueden ser modificados internamente.

```javascript
const usuario = { nombre: "Ana" };
usuario.nombre = "María"; // Esto es válido, porque estamos cambiando una propiedad del objeto.
```

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




