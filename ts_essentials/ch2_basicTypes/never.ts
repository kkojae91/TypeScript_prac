// never는 일반적으로 return에 사용된다.
// 함수의 리턴 타입을 never로 사용할 경우엔 함수의 끝까지 내려오면 안된다.
// 즉 중간에 throw와 같은 error코드를 던짐으로써 함수가 중간에 종료되게끔 만들어주어야 합니다.
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed!");
}

// 함수의 return type이 never일 경우 아래와 같이 return이 들어가면서 함수가 종료 되는 경우에는 error메세지를 던져준다.
// 함수가 종료되지 않아야한다.
function infiniteLoop(): never {
  while (true) {
    let a: number = 0;
    if (a === 1) {
      return;
    }
    a++;
  }
}

// never타입은 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있습니다.
// 하지만, never에는 그 어떤 것도 할당할 수 없습니다.
// any 조차도 never에게 할당 할 수 없습니다.
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 합니다.

let a: string = "hello";

if (typeof a !== "string") {
  // a 변수는 never type이 적용된다.
  a;
}

declare const a1: string | number;

if (typeof a1 !== "string") {
  // a1 변수는 number type이 적용된다.
  a1;
}

// never 활용 예시
// 조건부 타입
// T의 타입이 string이 아니라면 never type할당
// 잘못된 타입이 들어오는 것을 막아준다.
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;
