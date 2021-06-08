// 3.condition type: 조건이 맞으면 어떤 타입을 선택한다 
// 즉 어떤 타입이 이런 타입이라면 이 타입을 써야지라고 조건적으로 결정할 수 있는 타입이다.

type Check<T> = T extends string? boolean:number; //Check 에 주어진 타입이 문자열,을 상속한다면 불리언 아니면 넘버
type Type = Check<string>; //boolean

type TypeName<T> = T extends string
? 'string'
: T extends number
? 'number'
: T extends boolean
? ' boolean'
: T extends undefined
? 'undefined'
: T extends Function
? 'function'
: 'object';

type t0 = TypeName<string>; 'string' //string
type t1 = TypeName<'a'>; ' string' // string
type t2 = TypeName<() => void>; 'function' //function
