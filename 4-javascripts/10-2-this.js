console.log(this); //this가 window 객체를 가리킴

function simpleFunc() {
  console.log(this);
}
simpleFunc();

class Counter {
  count = 0;
  increase = () => {
    //bind를 이용하지않으려면 이 함수를 arrow function으로 작성해주면 안잃어버림
    console.log(this); //this가 Counter를 가리킴
  };
}
const counter = new Counter();
counter.increase(); // 위에 this가 undefinded을 가리킴

const caller = counter.increase();
//const caller = counter.increase.bind(counter); //bind!!
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase();
bob.run(); // 위에 this가 Bob을 가리킴
