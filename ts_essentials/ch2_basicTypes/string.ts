// js와 마찬가지로 "", '' 모두 사용할 수 있다.
// template string 역시 지원!
let myName: string = "Kkojae";
myName = "jaejeung";

let fullName: string = `jaejeung Ko`;
let age: number = 31;
let sentence: string = `Hello, My name is ${fullName}.
I'll be ${age + 1} years old next month.
`;

console.log(sentence);
