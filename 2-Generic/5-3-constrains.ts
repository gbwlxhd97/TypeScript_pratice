interface Employee {
  pay():void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!');
  }
  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!');
  }
  workPartTime() {}
}
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 리턴하는 함수는 좋지않음.
function payBad(employee: Employee):Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T):T { //인터페이스 구현하는 제네릭
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();
const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob); 

const obj = {
  name : 'jiwon',
  age: 20,
}

const obj2 = {
  animal: 'dog'
}
// 밑에 라인  K는 오브젝트 T에 있는 키들 중 하나를 상속받음 keyof X X안에들어가 있는 타입
function getValue<T,K extends keyof T,>(obj : T, key: K): T[K] { 
  return obj[key];
}