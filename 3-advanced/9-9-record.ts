// 타입 두개를 연결하고 싶을때 하나를 키로 쓰고 나머지를 다른 타입으로 묶고 싶을때 사용

type PageInfo = {
  title: string;
}
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  //Page = K PageInfo = value
  /* 
  type Record<K extends keyof any, T> = {
    [P in K]: T;
};
  */ 
  home: {title: 'home'}, //string만 쓸 수 있음
  about: {title: 'about'},
  contact: {title: 'contact'}
};

