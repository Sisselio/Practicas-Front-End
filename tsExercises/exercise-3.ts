import { Animal } from "./exercise-1";
interface Cat extends Animal {
  color: string;
}
interface Snake extends Animal {}

const cat: Cat = {
  name: "Gatete",
  color: "Black",
  canSleep: true,
};
const snake: Snake = {
  canEat: true,
  canDrink: true,
  canSleep: true,
};
