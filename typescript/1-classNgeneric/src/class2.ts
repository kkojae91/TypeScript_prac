interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

// abstract class를 생성하면 반드시 상속받는 자식 class에서 abstract를 걸어준 변수, 메서드를 완성해주어야 한다.
abstract class Korean implements Person {
  public abstract personCode: number;
  constructor(public name: string) {}

  say(message: string): void {
    console.log(message);
  }

  abstract loveKimchi(): void;
}

class KoreanProgrammer extends Korean implements Programmer {
  // 부모의 constructor 이외의 인자를 받을 경우는 constructor 안에 super(부모 인자); 를 작성해주어야 한다.
  constructor(public name: string, public personCode: number) {
    super(name);
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + ".....";
  }

  // abstract 메서드 완성
  loveKimchi(): void {
    console.log("I love kimchi!");
  }
}

// abstract class는 인스턴스를 생성할 수 없다.
// const per = new Korean('kkojae');
const kkojae = new KoreanProgrammer("kkojae", 999);
