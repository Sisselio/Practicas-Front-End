// Ejercicio 4, refactoriza el código
// Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

// Primer código
// Tenemos una función que saca el nombre completo del usuario con el nombre y apellido
const usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

function nombreUsuario(user) {
  const nombrCompleto = "Me llamo " + user.nombre + " " + user.apellido;

  return nombrCompleto;
}
console.log(nombreUsuario(usuario));
// cambiado el orden del console.log moviendolo debajo de la funcion a la que llama
// cambiada la declaracion del objeto a const

// Segundo código
// Tenemos una función que calcula el salario anual y el nombre del usuario
const user1 = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function user1Data(user) {
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(user1Data(user1));
// este creo que esta bien

// Tercer código
// Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€
const user2 = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  if (user.nationality !== "España") {
    if (user.age === 30) {
      return "Apto para la ayuda del gobierno";
    } else {
      return "No es apto para la ayuda del gobierno";
    }
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(esExtrangero(user2));
// añadido un tercer igual a los ifs
// cambiado el tipo de la variable que compara en el segundo if
