interface Props {
  name: string;
  // 인덱스시그니처의 타입은 string | number 만 올 수 있다.
  [key: string]: string;
}

// 타입의 확장성이 있을 경우 인덱스 시그니처 타입을 사용한다.
const p: Props = {
  name: "kkojae",
  a: "d",
  b: "b",
  // key 타입을 string으로 정의했을 경우 number 타입이 오게 되면 error발생
  // c: 1,
  // key 타입이 string일 경우 index key 값을 number 타입으로 지정할 수 있다.
  // 단, key 타입이 number일 경우 index key 값은 반드시 number 타입이여야 한다.
  0: "c",
  1: "d",
};

// keyof를 통해 key값의 타입을 가지고 올 수 있다.
let keys: keyof Props;
type key = keyof Props;

interface User5 {
  name: string;
  age: number;
  hello(message: string): void;
}

// 'name', 'age', 'hello' 만 keyofUser에 할당할 수 있게 된다.
let keyofUser: keyof User5;
keyofUser = "age";
keyofUser = "hello";

let helloMethod: User5["hello"];
helloMethod = (message: string): void => {
  console.log("hihihi");
};
