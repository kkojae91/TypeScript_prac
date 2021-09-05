// indexable
// 객체의 확장성을 보장하는 property
// js에서 person["whatever"] = 블라랄, 형식으로 새로운 속성을 추가한 것 처럼 그러한 경우 타입 설정을 해줄 수 있다.
// 아래 예시는 any 타입이지만, 실제는 any가 아닌 다른 타입을 설정해주는게 좋다.
interface Person3 {
  name: string;
  age?: number;
  // 어떠한 이름의 프로퍼티가 와도 괜찮아. (추가 설정이 필요할 경우 indexable property 설정)
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: "kkojae",
  age: 31,
};

const p32: Person3 = {
  name: "jaejeung",
  // 아래의 brothers가 indexable property 입니다.
  brothers: ["jaehwan", "jaemin"],
};

const p33: Person3 = {
  name: "kojaejeung",
  // father, mother가 indexable property 입니다.
  father: p31,
  mother: p32,
};

hello3(p31);
hello3(p32);
hello3(p33);
