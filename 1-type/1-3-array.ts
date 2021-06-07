{ 
  //array
  const fruits: string[] = ['사과','바나나'];
  const scores: Array<number> = [1,2,3];
  function printArray(fruits: readonly string[]) {}

  //tuple 비추.다만.서로다른 두 타입을 동적으로 만들어서 리턴할때는 사용 ㄱㅊ ,서로다른 타입을 가질 수 있음
  //튜플과 배열의 차이점은 안에값이 다르면 튜플 같으면 배열이다. react hooks의 useState는 튜플형태임!
  let student: [string,number];
  student = ['name',123];
  student[0] // name
  student[1] // 123
  const [ name ,age] = student;
  
}