/**
 * 타입 별칭
 * 이전에 존재하는 타입의 이름을 바꿀 경우
 * 타입을 재정의하는 경우(이미 정의한 타입을 조합하여 새로운 타입을 만드는 경우)
 * 문자열 리터럴 타입을 조합하여 정의할 경우
 * 많이 사용된다.
 * 모든 것들은 interface와 동일하게 사용 가능!!
 */

interface User {
  name: string;
}

interface Action {
  do(): void;
}

type UserAction = User & Action;

function createUserAction(): UserAction {
  return {
    do() {},
    name: "kkojae",
  };
}

type StringOrNumber = string | number;
type Arr<T> = T[];
type P<T> = Promise<T>;

type User3 = {
  name: string;
  login(): boolean;
};

class UserImple implements User3 {
  constructor(public name: string) {}

  login() {
    return true;
  }
}

type UserState = "PENDING" | "APPROVED" | "REJECTED";

function checkUser(user: User3): UserState {
  if (user.login()) {
    return "APPROVED";
  } else {
    return "REJECTED";
  }
}
