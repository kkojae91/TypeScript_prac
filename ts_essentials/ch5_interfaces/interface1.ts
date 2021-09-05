// interface의 문법은 컴파일 될 경우 사라지게 된다.
// 컴파일 타임에만 필요! (컴파일 타임에서 문제가 없는지 확인하는 역할을 한다.)
interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: "kkojae",
  age: 31,
};

hello1(p1);
