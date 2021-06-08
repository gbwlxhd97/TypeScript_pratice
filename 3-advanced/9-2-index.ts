// 다른 타입에 있는 키에 접근해서 그 키의 value의 타입을 그대로 다시 선언할 수  있음
{
  const obj = {
    name: 'ellie',
  }
  obj.name; //ellie
  obj['name']; //ellie
  
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };
  type Name = Animal['name'] //Name은 String이 된다. Name 타입에 Animal에 name 값을 선언해줌
  const text: Name = 'he'; //text라는 변수에 Name 타입을 선언하면 text는 이제 문자열만 선언가능

  type Gender = Animal['gender']; // male female

  type Keys = keyof Animal; // animal에 선언된 name age gender 모두 선언
  const key: Keys = "gender"; //key 변수는 Keys에 선언된 유니온 타입인 name ,age,gender 할당가능
  

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'ellie',
    gender: 'female'
  };
}
/*index 타입은 다른 타입에 있는 키에 접근해서
그 키의 value의 타입을 그대로 다시 선언할 수  있음

*/