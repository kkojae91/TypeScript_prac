interface User {
  name: string;
}

interface Action {
  do(): void;
}

// interfaceType & interfaceType => intersection type 생성
// UserAction이라는 interface를 새롭게 생성하지 않고 intersection type을 사용해서 return type을 정의 할 수 있다.
function createUserAction(u: User, a: Action): User & Action {
  return { ...u, ...a };
}

const u = createUserAction({ name: "kkojae" }, { do() {} });

u.do;
u.name;

function compare(x: number, y: number);
function compare(x: string, y: string);
function compare(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x === y ? 0 : x > y ? 1 : -1;
  }

  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }

  throw Error("not supported type!");
}

const numberCompare = compare(1, 2);
console.log(numberCompare);
const stringCompare = compare("1", "1");
console.log(stringCompare);
// 함수 오버로딩을 사용하면 아래와 같이 컴파일 타임에 에러를 발생 시킬 수 있다.
// 오버로딩을 사용하지 않을 경우 런타임 에러가 발생해서 not supported type! error가 발생한다.
// compare("1", 2);

console.log([3, 2, 1].sort(compare));
console.log(["b", "c", "a"].sort(compare));

// 이때, return 타입은 boolean이 아닌 v is Action v가 Action인지 확인하는 리턴 타입을 설정해준다!
function isAction(v: User | Action): v is Action {
  // type assertion을 사용해서 이값이 Action이라 단정(고정시키고)하고 .do를 호출해서 undefined가 나온다면 false, 값이 있다면 true를 return 해준다.
  return (<Action>v).do !== undefined;
}

// interface를 union타입으로 사용할 경우 타입 체크를 할 수 없기 때문에 위와 같은 타입 확인 함수를 만들어서 타입을 확인해준다.
function process(v: User | Action) {
  if (isAction(v)) {
    v.do;
  } else {
    v.name;
  }
}
