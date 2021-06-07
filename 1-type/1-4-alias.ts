{
  //타입 엘리어스란? 새로운 타입을 내가 정의 할 수 있음.
  type Text = string; //text은 지금부터 문자열임 
  const name:Text = 'hi';
  const address: Text = "hihi";
  type Num = number;
  type Student = {
    name:String;
    age:number;
  };
  const student:Student = {
    name: '흐앵',
    age: 12,
  };

  // string  Literal types
  type Name = 'name';
  let jiname: Name;
  jiname = 'name'; //jiname 은 Name 타입이기때문에 어떤 다른 문자열을 넣어줄수없음
  type Json = 'json';
  let json: Json = 'json';

  type Boal = true;
  const iscat:Boal = true;
}