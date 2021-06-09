## 자바스크립트 프로토, THIS, module 정리!

1. ### 프로토타입 : 객체지향언어들은 프로토타입을 기반으로 해서 할 수 있었음.
   즉 프로토타입은 상속을 위해서 쓰이는 언어이다
   array도 당연히 프로토를 상속한다 그렇기 떄문에 array.pop length array 메소드를 사용할 수 있다.
   자바스크립트의 모든 object들은 Object라는 프로토를 가지고 있다.
   즉 프로그래밍 상속을 하기 위해서 쓰이는 것, 코드를 재사용하기 위해서 만들어진것임.
2. ### 자바스크립트 THIS :

   타 프로그래밍언어에서 this 는 class 자신을 뜻함
   즉 this는 만들어진 객체 자신을 가리킴
   다만 자바스크립트 this는 누가 부르냐에 따라서 달라질 수 있다.
   기본적으로 정의된 함수는 글로벌객체(window)에서 접근이 가능하다.
   하지만 let,const같은 변수는 글로벌객체에 등록되지 않는다.
   하지만 var은 글로벌객체에 등록이된다.
   자바스크립트는 this라는 정보를 다른 곳으로 할당하는 순간 잃어버릴 수 있다.
   잃어버리지 않으려면 밑에 바인딩 해줘야함 혹은 Arrow function
   arrow function을 이용하면 다른 프로그래밍 언어에서 클래스안에 this를 이용하면 자기 자신을 가르키는 것처럼 그 scope의 this context를 유지한다.!
   즉. 자바스크립트에서 this란 부르는 사람마다 달라지기 떄문에 ★ 따로 바인드를 호출하거나
   ★this에 접근하는 함수가 있다면 arrow function으로 사용하기 3)

3. ### 모듈 : 코드를 모듈화 해서 작성하는 것
   모듈화를 하게되면 기본적으로 서로 다른 파일에서는 다른 파일에 있는 것들을 접근하거나 볼 수 없다.
   모듈화를 하지 않으면 각각 다른파일의 코드가 global scope로 측정이 되서 함수명이 겹쳐서 오류가 발생할 우려가 있다.

모듈을 적용시키려면
export default or export를 해줘야한다.
export default 하게 된 것은 import 해서 사용해올떄 아무이름이나 원하는 대로 사용해올 수 있음.
또한 한 파일내에서 export default를 두번 이상 해줄 수 없다. 나머지는 export로 해준다.
★★또한 그냥 export 해준것은 { export 함수,변수명} 이렇게 가져와야한다. export default는 그냥가져옴