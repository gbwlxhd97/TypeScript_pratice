/*
 인터페이스와 type alias 차이
*/
type PositionType = {
  x: number;
  y: number;
}
interface PositionInterface{
  x: number;
  y: number;
}
//object 교집합
const obj1 : PositionType = {
  x:1,
  y:2
}
const obj2 : PositionInterface = {
  x:1,
  y:2,
  z:1
}
//class 교집합
class pos1 implements PositionType {
  x:number;
  y:number;
}
class pos2 implements PositionInterface {
  x:number;
  y:number;
  z:number;
}
//extends 교집합
//기존타입과 인터페이스에서 상속을 받아서 z 도 추가시킴.
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & {z : number};

//only interface만 가능 새로운 정보를 동일한 인터페이스에 추가하는것
// type은 가능하지 않다. merge (X)

interface PositionInterface{
  z: number;
}

type Person = {
  name: string;
  age: number;
}

type Name = Person['name']; //이렇게 선언 하면 자동으로 Name은 스트링타입 받아올 수 있음

type NumberType = number;
type Direction = 'left' | 'right' //유니온도 타입만의 기능