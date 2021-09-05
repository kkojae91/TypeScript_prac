"use strict";
var p41 = {
    name: "kkojae",
    age: 31,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694 " + this.name + " \uC785\uB2C8\uB2E4.");
    },
};
var p42 = {
    name: "jaejeung",
    age: 31,
    // 함수의 첫번째 인자로 this를 넣을 수 있다. (ts에서만 가능)
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694 " + this.name + " \uC785\uB2C8\uB2E4.");
    },
};
// const p43: Person4 = {
//   name: 'kojaejeung',
//   age: 31,
//   // arrow function은 this는 전역 객체의 this를 가르키기 때문에 error발생
//   hello: (): void => {
//     console.log(`안녕하세요! ${this.naem} 입니다.`)
//   }
// }
p41.hello();
p42.hello();
