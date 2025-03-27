---
title: Control de Flujo
description: Control de Flujo.
---

## La igualdad en JavaScript

### Existen **dos operadores de igualdad** en JavaScript:

| Operador | Nombre                     | Compara valores | Compara tipos |
| -------- | -------------------------- | --------------- | ------------- |
| `==`     | Igualdad débil (loose)     | ✅ Sí            | ❌ No          |
| `===`    | Igualdad estricta (strict) | ✅ Sí            | ✅ Sí          |


#### Error común

Muchos principiantes usan `==` por error cuando **deberían usar `===`**, lo que puede dar **resultados inesperados**.



#### Ejemplo clave:

```javascript
5 == "5";   // ✅ true
5 === "5";  // ❌ false (distintos tipos)
```


#### Casos raros con `==`:

```javascript
0 == "";         // true
0 == [];         // true
"" == [];        // true
null == undefined; // true

0 == null;       // false
false == "false" // false
"true" == true // false
"false" == false // false
```

Estas inconsistencias hacen que `==` sea **poco confiable**.


#### Recomendación:

> **Siempre usa `===`** (igualdad estricta) a menos que tengas un motivo muy claro para no hacerlo.

Si necesitas comparar un número y una cadena, **convierte explícitamente**:

```javascript 
Number("5") === 5 // true
```


### Comparación de objetos y arrays

:::caution
- Incluso con `===`, dos objetos o arrays **no se consideran iguales** aunque tengan el mismo contenido:

```javascript
//arrays
let miArray1 = [1, 2, 3];
let miArray2 = [1, 2, 3];
miArray1 === miArray2 // false

//objetos
let miObjeto1 = {mensaje: "Hola"}
let miObjeto2 = {mensaje: "Hola"}
miObjeto1 === miObjeto2 // false
miObjeto1 == miObjeto2 // false

// Si es una referencia al mismo objeto
let miObjeto1 = {mensaje: "Hola"}
let miObjeto2 = miObjeto1;
miObjeto1 === miObjeto2 // true

```

Esto sucede porque:

> JavaScript compara **referencias**, no el contenido.


- Solo serán iguales si apuntan al **mismo objeto en memoria**:

:::

### ¿Cómo comparar el contenido de objetos o arrays?

Esto se llama **comparación profunda** o *deep equality*, y requiere:

- Comprobar cada clave y valor manualmente
- Usar utilidades como `lodash.isEqual` o escribir una función recursiva.
:::note
[Lodash](https://lodash.com/) es una popular librería de utilidades para JavaScript, que ofrece funciones para trabajar con arrays, objetos, cadenas, etc., de forma más eficiente y cómoda.
:::


### Resumen

| Situación                          | Resultado                         |
| ---------------------------------- | --------------------------------- |
| `5 == "5"`                         | ✅ `true` (coerción de tipos)      |
| `5 === "5"`                        | ❌ `false`                         |
| `{ a: 1 } === { a: 1 }`            | ❌ `false` (distintas referencias) |
| `obj1 === obj2` (misma referencia) | ✅ `true`                          |
| `null == undefined`                | ✅ `true`                          |
| `null === undefined`               | ❌ `false`                         |


### Conclusión

- Usa **`===` siempre** para evitar errores inesperados.
- No compares objetos o arrays con `===`, a menos que sepas que son la misma referencia.
- Para comparar contenidos, necesitarás **deep equality**.


-----

## Las sentencias if en JavaScript


Las sentencias `if` permiten **ejecutar código condicionalmente** en función de si una condición es verdadera o falsa.

### Sintaxis básica

```javascript
if (condición) {
  // Código si la condición es verdadera
} else if (otraCondición) {
  // Código si la otra condición es verdadera
} else {
  // Código si ninguna condición es verdadera
}
```
:::note
En JavaScript, la condición SIEMPRE debe ir entre paréntesis `()` (a diferencia de Python, por ejemplo).
:::

### ¿Qué es *truthy* y *falsy*?

JavaScript **convierte automáticamente** cualquier valor en `true` o `false` al evaluarlo en una condición.

- Valores que se comportan como `true` se llaman **truthy**
- Valores que se comportan como `false` se llaman **falsy**

#### 🔻 Valores *falsy* en JavaScript (solo 7):

1. `false`
2. `0`
3. `-0`
4. `0n` (BigInt cero)
5. `""` (cadena vacía)
6. `null`
7. `undefined`
8. `NaN`

Todo lo demás es **truthy**, incluso:

- `[]` (array vacío)
- `{}` (objeto vacío)
- `Infinity`
- `'0'` (cadena con un cero)


#### Ejemplo práctico:

```javascript
let mensaje = "";

if (mensaje) {
  console.log("Mensaje no está vacío");
} else {
  console.log("Mensaje está vacío");
}
// Output: "Mensaje está vacío" porque "" es falsy
```


### Operadores lógicos en condiciones

Puedes combinar condiciones usando estos operadores booleanos:

| Operador | Signo | Ejemplo                | Significado                              |
| -------- | ----- | ---------------------- | ---------------------------------------- |
| **AND**  | `&&`  | `if (x > 0 && x < 10)` | Las dos condiciones deben ser verdaderas |
| **OR**   | `\|\|`| `if (x > 0 \|\| x > 10)` | Una de las dos condiciones debe ser verdadera|
| **NOT**  | `!`   | `if (!activo)`         | Niega el valor                           |


#### Ejemplo:

```javascript
const edad = 20;
const tienePermiso = true;

if (edad >= 18 && tienePermiso) {
  console.log("Puedes entrar");
}
```


###  ¡Cuidado con los falsos positivos!

Ejemplos extraños usando `==` (no recomendado):

```javascript
console.log(0 == "");         // true
console.log([] == false);     // true
console.log(null == undefined); // true
```

✅ Mejor siempre usar `===` y tener presente la lista de valores *falsy*.


### Resumen

- Usa `if` para tomar decisiones en tu código.
- Recuerda que **no solo los booleanos se evalúan** como condiciones.
- Memoriza los **7 valores falsy**.
- Usa operadores lógicos (`&&`, `||`, `!`) para construir condiciones más complejas.

------


## Los bucles `for` en JavaScript

Los bucles permiten ejecutar un bloque de código **varias veces**. En JavaScript, existen **varias formas de usar `for`**, dependiendo del tipo de dato y del objetivo.

### **Bucle `for` clásico** (estilo C/Java)

```javascript
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

- Tres partes separadas por `;`  :

  - Inicialización (`let i = 0`)
  - Condición (`i < array.length`)
  - Incremento (`i++`)

- Es propenso a errores como *off-by-one*.

- Se recomienda **solo cuando necesitas acceso al índice**.

### **Bucle `for...of`**

```javascript
for (let item of array) {
  console.log(item);
}
```

- Recorre todos los elementos de un array.
- Es más **legible** y **limpio**.
- Ideal cuando **no necesitas el índice**, solo los valores.
- Puedes usar cualquier nombre de variable (`item`, `persona`, `libro`, etc.).


### **Bucle `for...in`**

```javascript
for (let clave in objeto) {
  console.log(clave, objeto[clave]);
}
```

- Recorre todas las **propiedades** de un objeto.
- Usa `in` en lugar de `of` → ¡no confundir!
- `clave` será el nombre de cada propiedad (`nombre`, `edad`, etc.).


### **Método `forEach()`**

```javascript
array.forEach(function(elemento) {
  console.log(elemento);
});
```

O con arrow function:

```javascript   
array.forEach(elemento => console.log(elemento));
```

- Es un **método** de los arrays.
- Recibe una **función como argumento** que se ejecuta para cada elemento.
- No es un `for` clásico, pero **se comporta como un bucle**.
- Muy usado en programación moderna.

### ¿Cuál usar?

| Caso de uso                             | Opción recomendada     |
| --------------------------------------- | ---------------------- |
| Recorrer un array y necesitas el índice | `for` clásico          |
| Recorrer los valores de un array        | `for...of` o `forEach` |
| Recorrer las propiedades de un objeto   | `for...in`             |
| Usar programación funcional             | `forEach`              |



### Resumen visual

| Tipo          | Uso principal                    | Sobre qué funciona |
| ------------- | -------------------------------- | ------------------ |
| `for` clásico | Bucle con índice                 | Arrays             |
| `for...of`    | Recorrer elementos directamente  | Arrays, cadenas    |
| `for...in`    | Recorrer claves/propiedades      | Objetos            |
| `forEach()`   | Función aplicada a cada elemento | Arrays             |





