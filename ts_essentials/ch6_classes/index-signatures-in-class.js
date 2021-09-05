"use strict";
// class => object
// 동적인 property를 받기 위해서는 [index: string]: string;으로 받아주면 됩니다.
// {mark: 'male', jade: 'male'}, {chloe: 'female', alex: 'male', anna: 'female'}
class Students {
    constructor() {
        // 말이 되지 않지만 모든 반에 kkojae라는 학생이 존재한다고 가정한다면, 아래와 같이 작성해서 초기값을 설정해줄 수 있다.
        // kkojae라는 값에 male 만 할당하게 된다면 오류가 발생된다.
        // male이라는 타입을 명시해주어야 error를 해결할 수 있다.
        this.kkojae = "male";
    }
}
const a = new Students();
a.mark = "male";
a.jade = "male";
console.log(a);
const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";
console.log(b);
