/* Quick Start - class
 * class키워드를 이용하여 class를 만들 수 있다.
 * class 이름은 대문자를 사용한다.
 * new 를 이용하여 class를 통해 object를 생성할 수 있다.
 * constructor를 이용하여 object를 생성하면서 값을 전달 할 수 있다.
 * this를 이용해서 만들어진 object를 가리킬 수 있다.
 * JS 컴파일되면 es5의 경우 function으로 변환된다.
 */

class Person1 {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person1("kkojae");

console.log(p1);
