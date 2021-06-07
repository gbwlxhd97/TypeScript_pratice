{
  /*상수값들을 한 곳에 모아서 정리하게 도와줌.
    js에는 없는 기능.
  */
  // js 방식
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const monday = 0;
  const tuesday = 1;
  //최대한 js로 ENUM에 가깝게 행동하는 코드
  const DAYS_ENUM = Object.freeze({"monday":0 ,"tuesday":1});
  const today = DAYS_ENUM.monday;

  //ts 방식

  enum Days {
    monday,
    tuseday,
    wednesday
  }
  console.log(Days.monday);
  const day = Days.wednesday;
  console.log(day);
}
/*
  ts에서 Enum은 가능한한 쓰지 않는것이 좋다 -> day라는 변수에 요일만 넣었지만 다른 값도 넣을 수 있다 day = 10; 등등
  그러니 Union을 사용해서 enum을 대신할 수도 있음
*/