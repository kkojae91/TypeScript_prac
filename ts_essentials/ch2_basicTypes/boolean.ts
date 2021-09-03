let isDone: boolean = false;

isDone = true;

console.log(typeof isDone); // boolean

let isOk: Boolean = true;

// ts에서는 아래와 같이 래퍼객체로 선언하지 않고 Primitive하게 설정한다.
let isNotOk: boolean = new Boolean(false);
