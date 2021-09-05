"use strict";
class Person7 {
    hello() {
        // Person7.CITY로 class 내부에서 접근 가능
        console.log(`안녕하세요! 저는 ${Person7.CITY}에 살아요!`);
    }
    change() {
        Person7.CITY = "LA";
    }
}
// static이라는 키워드가 붙게 되면 인스턴스에서 접근 불가!
// Person7 객체 자체로 접근해야한다.
// static으로 설정하는 경우 공통적으로 사용해아하는게 있을 경우 설정
Person7.CITY = "seoul";
const p7 = new Person7();
const p77 = new Person7();
p7.hello();
// static CITY는 공유되고 있는 프로퍼티이기 때문에, p7에서 값을 변경할 경우 p77의 값 역시 변경되어 있습니다!
p7.change();
p7.hello();
p77.hello();
// Person7.hello();
// private을 설정하게 되면 외부에서는 접근 불가능
// console.log(Person7.CITY);
// p7.hello();
