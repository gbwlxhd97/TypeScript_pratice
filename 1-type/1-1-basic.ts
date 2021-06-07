{
 //number
 const num:number = 6;
 //string
 const str:string ="ho";
 //boolean
 const bool:boolean= true;
 //undefined  값이 아직 있거나 없거나 값이 아직 결정되지 않았거나.
 function find(): number | undefined {
   return undefined;
 }
 //null 값이 그냥 없음 null선언하면 어떠한 데이터를 넣을 수 없음
 let person: string | null;

 //unknown 좋지못한 타입임.  비추 .
 let notSure: unknown;
 notSure ='h3';
 notSure = true;

 // any 이것도 좋지못한 타입임. 무엇이든 되기 때문에.
 let anything: any =0;
 anything = "hellp";
 anything = 0;

 // void 
 function print(): void { // return 하는것이 없으면 void 아니면 아님. 어느언어든 동일하구나
   console.log("ho");
 }
 // never  절대 아무것도 return 하지 않으면 never!! 에러를 던지던가 와일문이 필요함.

 function throwError(message: string): never {
    // message -> server (log) 로그를 통해 에러확인
    throw new Error(message);
    /*
    while (true) {}
    */
 }

 //object object 타입이면 모두 가능. 어느것이든 다받음. 비추하는코드임 타입을 명시해주면 ㄱㅊ
 let obj:object;
 function accpetSomeobject(obj: object) {

 }
 accpetSomeobject({name: 'jiwon'});
 accpetSomeobject({name: 'jiwon2'});
}