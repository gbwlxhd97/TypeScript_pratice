{
  function checkNotNullBAD(arg: number | null):number {
    if(arg == null) {
      throw new Error('not vaild number');
    } 
    return arg;
  }
  
  const result = checkNotNullBAD(123);
  console.log(result);
  //위 함수는 숫자타입밖에 못집어넣음 *그렇다고 any는 절대사용X  null | any 이기 떄문이다.

  function checkNotNull<G>(arg:G | null): G {
    if(arg == null) {
      throw new Error('not vaild number');
    } 
    return arg;
  }
  const num :number = checkNotNull(123); //이렇게 숫자 문자열 사용 가능
  const str : string= checkNotNull("hi");
  const bola : boolean = checkNotNull(false); 
 }