class Person6 {
  // readonly 속성을 사용한 값의 설정은 초기에 값을 설정할 때 이외의 어떠한 곳에서도 값을 변경할 수는 없다.
  // 읽어오는 것은 가능! (읽기 전용이기 때문)
  public readonly name: string = "jaejeung";
  // public readonly country: string;
  public constructor(private _name: string, private age: number, public readonly country: string) {
    // constructor 내부에서도 값을 설정할 수 있다.
    // this.country = "Korea";
  }

  hello() {
    console.log(this.country);
    // class 내부 메서드에서도 값을 바꾸려하면 error 발생!
    // this.country = "USA";
  }
}

const p6 = new Person6("kkojae", 31, "Korea");

console.log(p6);
console.log(p6.name);
// readonly 속성은 값을 읽어올 수 있지만 외부에서 값을 변경할 수 없다. 읽기 전용!!
// p6.name = "jaejeung";
