// Symbol type은 ecma2015버전부터 나왔기 때문에,
// tsconfig.json -> lib: ["ES2015", "DOM"]을 추가 해주어야 한다.
// DOM을 추가하지 않으면 console에서 에러가 난다.
console.log(Symbol("foo"));

// Symbol
// Primitive한 값을 담아서 사용한다.
// 고유하고 수정 불가능한 값을 만들어 준다.
// 그래서 주로 접근을 제어하는데 많이 사용된다.

console.log(Symbol("foo") === Symbol("foo")); // false;

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym];
// 위와 같이 사용해야 obj안에 sym에 접근할 수 있다.
// 아래와 같이 사용할 경우 error
obj["sym"];

console.log(obj[sym]);
console.log(obj["sym"]); // undefined
