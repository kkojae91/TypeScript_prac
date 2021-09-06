function helloBasic<T>(message: T): T {
  return message;
}

// 아래와 같이 <type> 괄호 안에 type을 명시하고, 함수에 전달 되는 인자는 <type>에 맞는 인자를 넘겨주어야한다.
helloBasic<string>("kkojae");
// <type>을 명시하지 않을경우,, type은 31(인자 값으로 추론)추론된다. number로 추론되는게 아니라 숫자 31로 추론된다..(주의!)
helloBasic(31);

function helloBasic2<T, U>(message: T, comment: U): T {
  return message;
}

// <type1, type2>로 두개 이상 작성할 수 있다. 첫번째 인자는 string type, 두번째 인자는 number type으로 결정 된다.
helloBasic2<string, number>("kkojae", 31);
// type을 명시하지 않을 경우 첫번째 type은 31 type, 두번째 type은 33 type으로 결정된다.
helloBasic2(31, 33);
