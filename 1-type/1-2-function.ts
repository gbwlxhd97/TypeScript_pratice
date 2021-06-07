{
  //js
  function jsadd(num1,num2) {
    return num1 + num2;
  }
  console.log(jsadd(1,2));
}

{
  //ts
  function add(numb1:number,numb2:number):number {
      return numb1 + numb2;
  }
}
 //ts로 변환하기.
function fetchnum(id:string):Promise<number> {
  //
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

{
  // js =>  ts 새로운 syntax 사용 가능
  // 1.optional parameter    ?: type 으로 기입 이름은 사용해도 안해도 ㄱㅊ
  function printName(firstname: string, lastname?: string) {
    console.log(firstname);
    console.log(lastname);
  }
  printName('gi', '앙슈');
}

{
  // 2. default parameter
  function printmessage(message: string = 'default message') {
    console.log(message);
  }
  printmessage();
}

{
  // 3. rest parameter
  function addplus(...numbers: number[]):number {
    return numbers.reduce((a,b) => a + b);
  }
  console.log(addplus(1,2,3,4,5,6));
}