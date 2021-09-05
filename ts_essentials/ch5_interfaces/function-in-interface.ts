interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: "kkojae",
  age: 31,
  hello: function (): void {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  },
};

const p42: Person4 = {
  name: "jaejeung",
  age: 31,
  // 함수의 첫번째 인자로 this를 넣을 수 있다. (ts에서만 가능)
  hello(this: Person4): void {
    console.log(`안녕하세요 ${this.name} 입니다.`);
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
