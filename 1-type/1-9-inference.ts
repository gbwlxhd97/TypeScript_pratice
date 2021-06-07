/*
  타입은 우리가 직접 정의하는것보다 알아서 결정되는 경우가 종종있다. 타입추론!
*/

let text = 'hello';
function print(message) {
  console.log(message);
}
print('hi');
print(1);


function add (x:number, y:number) {
  return x + y;
}
const result = add(1,2); //result는 자동으로 number타입으로 결정되