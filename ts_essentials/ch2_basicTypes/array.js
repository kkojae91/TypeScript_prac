"use strict";
// 배열 타입 표기법 number[] <- 보통 이와 같은 표기를 주로 사용!!
var list = [1, 2, 3];
// 배열 타입 표기법 Array<number>
var list1 = [1, 2, 3];
// union type으로 (stirng | number)[] 와 같이 선언하면 배열 안에 number type과 string type이 모두 사용 가능하다.
// string[] : 일경우는 배열안의 원소는 모두 string이여야 한다.
// number[] : 일 경우는 배열아의 원소는 모두 number이여야 한다.
var list2 = [1, 2, 3, "4"];
