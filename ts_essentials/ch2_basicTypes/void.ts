// void는 함수의 반환 타입으로 사용된다.
// void의 return 값은 undefined이외의 값은 아무것도 들어가지 못한다.
function returnVoid(message: string): void {
  console.log(message);
  return undefined;
}

returnVoid("리턴이 없당!");
