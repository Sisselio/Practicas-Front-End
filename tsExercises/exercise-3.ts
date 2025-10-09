// Ejercicio 3, Creando más tipos
// Partiendo del ejercicio anterior, crea un nuevo objeto llamado cat que solamente tenga name, color, canSleep
// Partiendo del ejercicio anterior, crea un nuevo objeto llamado Snake que solamente tenga canEat, canDrink, canSleep
interface Cat extends Bird {
  name: string;
  color: string;
  canSleep: boolean;
}
interface Snake extends Bird {}
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
