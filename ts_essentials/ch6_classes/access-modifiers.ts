/* 접근제어자 (Access Modifiers)
 * 접근제어자에는 public, private, protected 가 있다.
 * 설정하지 않을 경우 public 으로 설정된다.
 * 클래스 내부 모든 곳에 설정이 가능하다. (메서드, 컨스트럭쳐, 프로퍼티)
 * private로 설정하면 클래스 외부에서 접근이 불가능하다.
 * 자바스크립트에서는 private를 지원하지 않아 오랫동안 프로퍼티나 메서드 앞에 _ 를 붙여 표현했다.
 */

class Person3 {
  public name: string = "kkojae";
  private _age!: number;

  public constructor(age?: number) {
    if (age === undefined) {
      this._age = 20;
    } else {
      this._age = age;
    }
  }
}

const p3 = new Person3(31);
const p33 = new Person3();
console.log(p3);
console.log(p33);

// private을 사용하면 아래와 같이 _age에 접근하면 error 발생!
// 초기값을 설정할 때 이외에는 값에 접근 할 수 없다.
// console.log(p3._age);
// console.log(p33._age);
