function helloArray<T>(message: T[]): T {
  return message[0];
}

// type을 지정하지 않고 string type의 배열을 인자로 넣었을 경우,
// T의 타입은 string, 인자는 string[] 으로 추론된다. 리턴 값 역시 string으로 추론
console.log(helloArray(["hello", "world"]));
// type을 지정하지 않고 string, number type의 배열을 인자로 넣었을 경우,
// T의 type은 string | number 로 추론되고, 인자값은 (string | number)[], 리턴 값 역시 string | number로 추론된다.
console.log(helloArray(["Hello", 9]));

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

// type을 지정하지 않고 string type의 배열을 집어 넣을 경우,
// T type은 string, K type도 string, 인자 type은 [string, string]이고, 리턴값은 string으로 추론된다.
console.log(helloTuple(["hello", "world"]));
// type을 지정하지 않고 string, number type의 배열을 집어 넣을 경우,
// T type은 string, K type은 number, 인자 type은 [string, number]이고, 리턴값은 string으로 추론된다.
console.log(helloTuple(["hello", 9]));
