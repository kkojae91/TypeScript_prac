// a 변수는 string type만 할당할 수 있다.
// a : number; 일 경우 type이 number인 경우만 변수에 값을 할당할 수 있다.
let a: number;

// a = "Mark";

a = 39;

// 함수의 매개변수 b의 type은 number만 들어올 수 있다.
function hello(b: number) {}

// type number는 가능
hello(13);
// type string은 불가능
hello("Mark");
