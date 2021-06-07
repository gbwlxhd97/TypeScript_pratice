{
  /*
    타입을 강요할 때 사용 * 별로 좋은건 아님
  */

  function jsStrfunc(): any {
    return 'hello';
  }
  const result = jsStrfunc();
  (result as string).length;
  (<string>result).length;
  // 두개는 동일한것임

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 이건안댐

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
 // numbers.push //오류가 뜨는 이유는 숫자일수도 있고 언디파인일수도있음.

  const button = document.querySelector('class')// ! 뒤에 느낌표가 붙으면 무조건 버튼이 있다고 가정하는것임. 이프문과동일
  if (button) {
    button.nodeValue;
  }
}