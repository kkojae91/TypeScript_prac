// name은 항상 있고, age는 있을 수도 없을 수도 있을 경우 age? ?물음표를 붙여준다.
interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

// 개체의 프로퍼티가 있을 경우 없을 경우 모두 사용할 수 있다.
hello2({ name: "kkojae", age: 31 });
hello2({ name: "jaejeung" });
