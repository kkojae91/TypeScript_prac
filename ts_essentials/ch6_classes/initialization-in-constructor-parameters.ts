class Person4 {
  // public name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  // 위 코드를 한줄로 간단하게 작성할 수 있다. (constructor 안의 parameters에 접근제어자(access modifiers)를 설정해준다면! 한줄로 작성 가능)
  constructor(public name: string, private age: number) {}
}

const p4 = new Person4("kkojae", 31);
console.log(p4);
