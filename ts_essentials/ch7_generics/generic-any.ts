function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 위 두함수는 type만 다른... 두개의 함수 아래와 같이 any를 사용할 수 있고, generic을 사용할 수 있다.
// any의 단점과 generic의 장점을 확인해보자.

function hello(message: any): any {
  return message;
}

// 리턴 타입이 number로 추론되는게 아니라 any로 추론된다.. 이러한 문제를 해결하기 위해 generic이 등장!
console.log(hello("kkojae").length);
// type이 any이기때문에 숫자를 리턴하더라도 length 함수에서 error가 나지 않는다.
console.log(hello(31).length);

function helloGeneric<T>(message: T): T {
  return message;
}

// type을 설정하지 않았기 때문에 type이 kkojae(string)로 추론된다. 그러므로 length의 결과값은 number 타입으로 추론
console.log(helloGeneric("kkojae").length);
// type이 31(number)로 추론.. 그러므로 length와 같은 문자열 메서드는 사용 불가하다는 error발생
// console.log(helloGeneric(31).length);
// type이 true(boolean)으로 추론.
console.log(helloGeneric(true));
