"use strict";
// unknown (ts 3.0 버전부터 지원)
// any와 짝으로 any 보다 Type-safe한 타입
// any와 같이 아무거나 할당 가능
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
// 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
// unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같다.
// 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.
// any를 쓰는 자리에 unknown을 쓰게끔 하는게 타입을 최대한 안전하게 사용할 수 있다.
// maybe가 true이면 if scope가 실행되므로 aBoolean 변수의 타입을 boolean으로 설정 가능
// 그러나 string은 설정할 수 없음
if (maybe === true) {
    var aBoolean = maybe;
    // const aString: string = maybe;
}
// typeof type guard
// maybe의 타입이 string이면 if scope가 실행되므로 aString 변수의 타입을 string으로 설정 가능
// 다른 타입 불가!
if (typeof maybe === "string") {
    var aString = maybe;
    // const aBoolean: boolean = maybe;
}
if (typeof maybe === "number") {
    var aNumber = maybe;
    // const aBoolean: boolean = maybe;
}
