/* constructor & initialize
 * 생성자 함수가 없으면, 디폴트 생성자가 불린다.
 * 프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
 * strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야한다.
 * 프로퍼티 선언하는 곳, 생성자에서 값을 할당하지 않을 경우 !를 붙여 위험을 표현한다.
 * 클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined이다.
 * 생성자에는 async 를 설정할 수 없다!
 */

class Person2 {
  name: string = "kkojae";
  // 초기값을 설정하지 않지만 error를 발생시키지 않을 경우 !를 사용해주면 된다. 하지만, 주의! 요망 객체에서 값을 할당하지 않을 경우에는 undefined error가 발생된다.
  // age!: number;
  age!: number;

  // age의 인자를 받을 수도 있고, 받지 않을 수도 있을 경우 ?를 사용 age의 타입가드를 설정해줘야한다.
  constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}

const p2 = new Person2(31);
const p22 = new Person2();
console.log(p2);
console.log(p2.age);
