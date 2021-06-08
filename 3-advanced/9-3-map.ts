//기존에 있는 타입들을 이용하면서  조금 다른 형태로 변환할 수 있는것.
type Video = {
  title: string;
  author: string;
  descrition: string;
};

/*  이런것들을 Map 타입으로 코드를 간결히 사용가능
type VideoOptional = {
   title?: string;
  author?: string;
  descrition?: string;
 }

 type ReadOnlyVideo = {
   readonly title: string;
   readonly author: string;
   readonly descrition: string;
 }*/ 

// [1,2].map((item) => item * item);; // [1,4]

type Optional<T> = {
  [P in keyof T]?: T[P]; // for .. in
};
/* 위와 같다. T는 VideoOptional 이고 P는 title,author,description을 뜻함
  type VideoOptional = {
   title?: string;
  author?: string;
  descrition?: string;
 }
*/
type VideoOptional = Optional<Video>; //위 타입 선언하여 사용
const videoOp:VideoOptional = {
  title: 'hi',
};

type ReadOnly<T> = {
 readonly [P in keyof T]: T[P];
}


type Animal = {
  name: string;
  age: number;
}

const animal:Optional<Animal> = {
  age: 123
}

const video: ReadOnly<Video> = {
  title: 'hi',
  author: 'ho',
  descrition: 'hihi'
}

animal.name = 'co';

