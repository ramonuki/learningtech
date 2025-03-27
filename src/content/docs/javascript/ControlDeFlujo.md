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
```

Estas inconsistencias hacen que `==` sea **poco confiable**.


#### ✅ Recomendación:

> **Siempre usa `===`** (igualdad estricta) a menos que tengas un motivo muy claro para no hacerlo.

Si necesitas comparar un número y una cadena, **convierte explícitamente**:

```javascript 
Number("5") === 5 // true
```

------

### Comparación de objetos y arrays

:::danger
- Incluso con `===`, dos objetos o arrays **no se consideran iguales** aunque tengan el mismo contenido:

```javascript
{ a: 1 } === { a: 1 }  // false
[1, 2] === [1, 2]      // false
```

Esto sucede porque:

> JavaScript compara **referencias**, no el contenido.


- Solo serán iguales si apuntan al **mismo objeto en memoria**:

```javascript
const obj1 = { a: 1 };
const obj2 = obj1;

obj1 === obj2; // true
```
:::
------

### ¿Cómo comparar el contenido de objetos o arrays?

Esto se llama **comparación profunda** o *deep equality*, y requiere:

- Comprobar cada clave y valor manualmente
- Usar utilidades como `lodash.isEqual` o escribir una función recursiva.

------

### Resumen

| Situación                          | Resultado                         |
| ---------------------------------- | --------------------------------- |
| `5 == "5"`                         | ✅ `true` (coerción de tipos)      |
| `5 === "5"`                        | ❌ `false`                         |
| `{ a: 1 } === { a: 1 }`            | ❌ `false` (distintas referencias) |
| `obj1 === obj2` (misma referencia) | ✅ `true`                          |
| `null == undefined`                | ✅ `true`                          |
| `null === undefined`               | ❌ `false`                         |

------

### Conclusión

- Usa **`===` siempre** para evitar errores inesperados.
- No compares objetos o arrays con `===`, a menos que sepas que son la misma referencia.
- Para comparar contenidos, necesitarás **deep equality**.