"use strict";
var isDone = false;
isDone = true;
console.log(typeof isDone); // boolean
var isOk = true;
// ts에서는 아래와 같이 래퍼객체로 선언하지 않고 Primitive하게 설정한다.
var isNotOk = new Boolean(false);
