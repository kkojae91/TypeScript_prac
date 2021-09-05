class Person5 {
  public constructor(private _name: string, private age: number) {}

  get name() {
    return this._name + " Ko";
  }

  set name(n: string) {
    this._name = n;
  }
}

const p5 = new Person5("kkojae", 31);

// 함수처럼 사용하는게 아니라 프로퍼티 꺼내오는 것 처럼 사용한다는 것이 특징!
// private한 프로퍼티의 값을 변경하고 불러와주는 getter와 setter

// setter를 사용하지 않고 getter만 사용할 경우 읽기만 가능한 프로퍼티를 만들 수 있다.

// get을 하는 함수 getter
console.log(p5.name);

// set을 하는 함수 setter
p5.name = "jaejeung";

console.log(p5.name);
