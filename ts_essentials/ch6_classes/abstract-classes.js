"use strict";
// abstract class는 완전하지 않은 클래스 .. new로 object 생성을 바로 할 수 없다.
// 자식요소를 만들어서 완전하게 만든 후 new로 object 생성을 해야 한다.
// abstract를 class내부에서 사용하려면 class 앞에 abstract 키워드를 붙여줘야 error가 발생하지 않는다.
class AbstractPerson {
    constructor() {
        this._name = "Kkojae";
    }
}
// 아래와 같이 new 로 object를 바로 생성하려는 경우 error 발생
// new AbstractPerson();
class Person8 extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const p8 = new Person8();
console.log(p8);
p8.setName("jaejeung");
console.log(p8);
