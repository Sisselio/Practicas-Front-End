import { Race } from "./exercise-2";
export interface Animal {
  name?: string;
  canEat?: boolean;
  canDrink?: boolean;
  canSleep: boolean;
}
interface Bird extends Animal {
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
