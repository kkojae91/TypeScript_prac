// 함수의 return 타입은 아래와 같이 function funcName(): "여기" 에 작성한다.
// any는 어떠한 타입이 와도 관계가 없다. 최대한 사용자제...
// 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
// noImplicitAny = true일 경우
// any를 써야하는데 쓰지 않을 경우 오류를 뱉도록 설정할 수 있다. (strict 옵션에 포함되어 있음)
function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

let looselyTyped: any = {};

// 이런 말도 안되는 행위를 해도 error가 나지 않기 때문에 최대한 사용자제..
const d = looselyTyped.a.b.c.d;
// console.log(d);

// any 누수.. leakingAny
function leakingAny(obj: any) {
  // 함수 안에서 number type을 선언해주면, 누수를 막아줄 수 있다.
  const a: number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
// 함수안에서 number type을 선언하기 때문에 숫자 타입엔 indexOf() 메소드가 없다는 error 발생
// c.indexOf("0");
