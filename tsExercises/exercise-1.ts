// Crea un objeto bird que tenga los siguientes datos: name, canEat, canDrink, canSleep, canFly
// Crea un objero dog que tenga los mismos datos que pájaro, pero que a demás tenga: race, age
// Crea los tipos/interfaces necesarios para poder trabajar con estos datos en TypeScript.

interface Bird {
  name: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
  canFly: boolean;
}

interface Dog extends Bird {
  race: Race;
  age: number;
}
const bird: Bird = {
  name: "Pajarete",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: Dog = {
  name: "Perrillo",
  race: "Labrador",
  age: 11,
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: false,
};
