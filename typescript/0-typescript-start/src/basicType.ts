let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

// type에 맞는 값만 변수에 할당 할 수 있다.
numValue = 3.3;
stringValue = "hello";
stringValue = "hello";
stringValue = `
hi
${numValue}
hello
`;
// <참고> null, undefined타입은 가장 하위 타입으로 모든 타입에 할당할 수 있다.
numValue = null;
numValue = undefined;
stringValue = null;
stringValue = undefined;

// <참고> any타입은 최상위 타입으로 모든 타입을 할당할 수 있다.
anyValue = "string";
anyValue = 123;
anyValue = true;
anyValue = null;

// obj
objValue = {};
objValue = { name: "kkojae" };
objValue = new String("33");

// symbol
// symbolValue를 키로 사용할 수 있다.
symbolValue = Symbol("hello");
// symbol(hello)를 출력한다.
console.log(symbolValue);

// Array
let nameList: string[];
nameList = ["jae", "ko"];
// string이 아닌 type을 nameList에 넣으려 하면 error 발생
// nameList.push(33);

// 객체 리터럴 타입 정의(inline type)
let user1: { name: string; score: number };
// 무조건 name에는 string type, score에는 number type이 할당된 객체 형태여야 한다.
user1 = {
  name: "kojae",
  score: 33,
};

// tuple
// 0번 index는 string, 1번 index는 number 인 array
let tuple2: [string, number];
// 3개의 Number type array
let tuple3: [number, number, number];

tuple2 = ["kkojae", 30];
// index에 할당된 타입을 지키지 않으면 error 발생
// tuple2 = [30, 'kkojae'];

tuple3 = [1, 2, 3];
// 값을 4개를 할당하려하면 error 발생
// tuple3 = [1, 2, 3, 4];
