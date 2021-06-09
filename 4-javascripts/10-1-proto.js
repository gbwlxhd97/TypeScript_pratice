const x = {};
const y = {};
console.log(x);
console.log(y);
// 자바스크립트에서 모든 object는 프로토를 상속함.

console.log(x.toString());

const array = [];
console.log(array);
console.clear();
function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  /* this.makeCoffee = (shots) => {
    console.log('makingg...');
  }; */
}
// prototype member level
CoffeeMachine.prototype.makeCoffee = () => {
  console.log("");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype); //함수에서의 상속
const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
