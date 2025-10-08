// Ejercicio 2, Hoisting
// Que devuelve por consola cada uno de los siguientes console.log

console.log(a);
var a = "hola";
//devuelve 'undefined'
// ------------------------------------------------------------------------------------------------

console.log(b);
let b = "hola";
// devuelve un reference error
// ------------------------------------------------------------------------------------------------

console.log(c);
const c = "hola";
// devuelve un reference error
// ------------------------------------------------------------------------------------------------

sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}
// devuelve 'Hola desde sayHi'
// ------------------------------------------------------------------------------------------------

function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();
// devuelve 'Adios desde sayBye!'
