interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "kkojae",
  age: 31,
};

// keyof 키워드를 타입에 붙이게 될 경우 가지고 있는 key값들이 union타입으로 반환 된다.
// 즉, keyof IPerson 은 "name" | "age" type을 Keys에 할당한다.
type Keys = keyof IPerson;

// keys는 "age", "name" 둘중 하나만 입력할 수 있다.
const keys: Keys = "age";

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// generic의 extends + keyof를 혼용해서 사용하게 되면 return 값이 union type이 아닌 정확한 타입을 return 하게 된다.
getProp(person, "name");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "jaejeung");
