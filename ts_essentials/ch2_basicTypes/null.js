"use strict";
// 주석 처리되어 있는 부분처럼은 사용할 수 없습니다.
// strict 옵션을 true로 설정했기 때문
// let myName1: string = null;
// let u: undefined  = null;
// let v: void = null;
// void 타입에는 null은 불가, undefined는 가능
var v = undefined;
// union type
// union 변수에 null 값을 설정 후 추후에 string 타입을 받고 싶을 경우는 아래와 같이 | (or)를 의미하는 버티컬 바를 넣어주면 된다.
var union = null;
union = "kkojae";
