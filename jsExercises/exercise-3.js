// Ejercicio 3, Acierta los console.log
// ¿Qué salida tendrán los siguientes console.log?

// Comparaciones con booleanos
console.log(false + false);
// devuelve 0
console.log(false + true);
// devuelve 1
console.log(true + true);
// devuelve 2

// Comparaciones con arrays
console.log([] === []);
// devuelve false
console.log([] + []);
// devuelve ''
console.log([1, 2] + [3, 4]);
// devuelve 1,23,4
console.log([1] + 1);
// devuelve 11
console.log([1] - 1);
// devuelve 0

// Comparaciones con objetos
console.log({} + {});
// devuelve '[object Object][object Object]'
console.log({} === {});
// devuelve false
console.log([] === {});
// devuelve false

// Comparaciones especiales
console.log(null + 1);
// devuelve 1
console.log(undefined + 1);
// devuelve NaN
console.log(null == 0);
// devuelve false
console.log(null <= 0);
// devuelve true
console.log(undefined == null);
// devuelve true

// Operaciones con NaN
console.log(NaN + 1);
// devuelve NaN
console.log(NaN == NaN);
// devuelve true
console.log(NaN === NaN);
// devuelve true
