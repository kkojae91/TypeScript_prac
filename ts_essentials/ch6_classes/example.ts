/* Quick Start - class
 * class키워드를 이용하여 class를 만들 수 있다.
 * class 이름은 대문자를 사용한다.
 * new 를 이용하여 class를 통해 object를 생성할 수 있다.
 * constructor를 이용하여 object를 생성하면서 값을 전달 할 수 있다.
 * this를 이용해서 만들어진 object를 가리킬 수 있다.
 * JS 컴파일되면 es5의 경우 function으로 변환된다.
 */

/* constructor & initialize
 * 생성자 함수가 없으면, 디폴트 생성자가 불린다.
 * 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
 * strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야한다.
 * 프로퍼티 선언하는 곳, 생성자에서 값을 할당하지 않을 경우 !를 붙여 위험을 표현한다.
 * 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined이다.
 * 생성자에는 async 를 설정할 수 없다!
 */

/* 접근제어자 (Access Modifiers)
 * 접근제어자에는 public, private, protected 가 있다.
 * 설정하지 않을 경우 public 으로 설정된다.
 * 클래스 내부 모든 곳에 설정이 가능하다. (메서드, 컨스트럭쳐, 프로퍼티)
 * private로 설정하면 클래스 외부에서 접근이 불가능하다.
 * 자바스크립트에서는 private를 지원하지 않아 오랫동안 프로퍼티나 메서드 앞에 _ 를 붙여 표현했다.
 */
class Person {
  // 초기값을 설정하지 않지만 error를 발생시키지 않을 경우 !를 사용해주면 된다. 하지만, 주의! 요망 객체에서 값을 할당하지 않을 경우에는 undefined error가 발생된다.
  // age!: number;

  // age의 인자를 받을 수도 있고, 받지 않을 수도 있을 경우 ?를 사용 age의 타입가드를 설정해줘야한다.

  // name: string; this.name = name
  // 위 코드를 한줄로 간단하게 작성할 수 있다. (접근제어자를 설정해준다면! 한줄로 작성 가능)
  public constructor(private _name: string, private age: number) {}

  // name이 동일하게 사용되는 충돌을 막아주기 위해 constructor의 name을 _name으로 변경해준다.
  get name() {
    // console.log("get");
    return this._name + " Ko";
  }

  // set name(n: string) {
  //   // console.log("set");
  //   this._name = n;
  // }
}

const p1 = new Person("kkojae", 31);

console.log(p1);

// 함수처럼 사용하는게 아니라 프로퍼티 꺼내오는 것 처럼 사용한다는 것이 특징!
// private한 프로퍼티의 값을 변경하고 불러와주는 getter와 setter

// setter를 사용하지 않고 getter만 사용할 경우 읽기만 가능한 프로퍼티를 만들 수 있다.
// get을 하는 함수 getter
console.log(p1.name);

// set을 하는 함수 setter
// p1.name = "jaejeung";

console.log(p1.name);
