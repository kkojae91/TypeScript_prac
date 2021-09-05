"use strict";
class Parent {
    // protected는 private과 동일하게 외부에서 접근할 수 없다.
    // private과 차이점은 protected는 상속된 자식요소에서는 접근이 가능!!
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고, 나이는 ${this._age}입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
const parent1 = new Parent("kkojae", 31);
parent1.print();
// _age, _name은 접근 불가 private, protected로 접근제어자가 설정되어 있기 때문!
// parent1._age;
// parent1._name;
class Child extends Parent {
    constructor(age) {
        super("kkojae JR.", age);
        // override 부모에서 protected였기 때문에 자식요소에서 접근 가능
        // overriding할 때는 접근 제어자도 overriding 할 수 있다.
        // Parent에서는 protected여서 외부접근이 불가능 했지만, 자식요소에서 public으로 설정하면 외부에서 접근 가능한 프로퍼티가 된다.
        // public _name = "kkojae JR.";
        // _age에 접근해서 값을 바꾸려하면 error 발생
        // _age = 12313;
        this.gender = "male";
        // 아래와 같이 this를 사용할 경우 반드시 super()를 먼저 호출해줘야 한다.!!
        // 아래 코드는 자식이 생성되면 바로 그 자식의 이름을 출력해준다.
        this.printName();
    }
}
const child1 = new Child(1);
console.log(child1);
child1.print();
console.log(child1.gender);
// console.log(child1._name);
// _age, _name은 역시 상속된 곳이여도 외부에서는 접근할 수 없다 . private, protected로 접근 제어자가 설정되어 있기 때문!
// child1._name;
// child1._age;
