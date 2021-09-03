"use strict";
// tuple type 선언 방법 [sting, number]
// array에 첫번째 인자가 무조건 stirng, 두번째 인자는 무조건 number일경우 사용 (순서, 타입, 길이 모두 맞아야 한다.)
// (string | array)[] 는 배열안에 string 혹은 number 둘 중 아무거나 와도 된다는 의미
var x;
x = ["hello", 99];
// x = [10, "hello"]; 두개 모두 error
// 길이를 초과하는 경우 error 발생
// x[2] = "7"
// 3번째 요소를 선언하지 않을 경우 undefined로 선언되기 때문에 undefined인데 왜 값을 넣냐는 error 발생
// x = ['hello', 30, '123'];
var person = ["kkojae", 31];
var first = person[0], second = person[1];
// thi에 error 발생 길이가 2인데 왜 3개를 받으려 하니?!
// const [fir, sec, thi] = person;
