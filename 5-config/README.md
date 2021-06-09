1. tsc test.ts - w : 타입스크립트 파일을 변경할때마다 즉시 js로 변환시켜주는명령어

tsconfig.json 파일을 생성한 같은 폴더안 ts파일은 이제 tsc -w 명령어만 입력하면 모든 ts파일들은 js로 컴파일됨

2. 프로젝트 구조 설정 하기

보통 js ts파일은 한폴더에서 관리하는것은 좋지않음 헷갈릴수도있음.

tsconfig.json파일에서

outDir : 컴파일된 js들을 어디에다 저장할 지 설정하는 것 기본값은 현재 디렉토리이다.

rootDir : 기본적으로 루트디렉토리는 최상위로 설정이 되어있다. 모든 ts파일들은 루트 디렉토리 안에있어야 컴파일된다고 설정해주는 것

개발자용 모드같은것들은 js파일로 컴파일 하지 않아도되니 저렇게 해주면 됨

include는 그 파일만 컴파일가능하게해줌

3. ts컴파일러 옵션 간단 설명

incremental : 컴파일이 될때마다 새롭게 모든 파일을 컴파일 하는것이 아닌 비교한후 수정된 내용만 컴파일해줌 기본값 true

target : js 버전 (es5 ,es6..등등)

module : 모듈정보 관리 Node js 랑 es6랑 컴파일된코드가 다름 node는 require사용

lib: 본인이 무슨 라이브러리를 쓸건지 설정하는것 (하지만 미리정해두는경우는 적다고함)

allowJs : 프로젝트 안에서 자바스크립트를 같이 쓸건지 결정하는것 기본값은 true ,

checkJs : 기본값 true로 설정하면 자바스크립트 코드가 잘못되면 에러 호출 해줌

보통 한 프로젝트에서 ts , js 섞어서 사용하면 위 두가지 옵션은 true로켜둠

jsx : react jsx를 사용할건지 말건지 결정

sourceMap: 디버깅할때 굉장히 유용하게 사용 - 기본값은 true인데 map이라는 파일을 생성하여 개발자 모드에서 디버깅하기 쉽게 도와줌

우리가 작성한 ts코드와 js코드를 연결시켜주는 정보들이 담겨있는 파일이다.

outFile : 우리가 작성한 다수의 ts파일전부를 하나의 js파일로 만들어줌

outDir : 컴파일된 js들을 어디에다 저장할 지 설정하는 것 기본값은 현재 디렉토리이다.

rootDir : 기본적으로 루트디렉토리는 최상위로 설정이 되어있다. 모든 ts파일들은 루트 디렉토리 안에있어야 컴파일된다고 설정해주는 것

composite : 이전에 build한 정보를 기억하고 있어서 다음 build를 더빠르게 해줌.

★ strict 기본값 true 만약 false로 변경하면 일반 js쓰는것과같음 항상엄격한 확인을 받을 수 있도록 true로 설정해주기