// 열거형 타입 enum
enum StarbuckGrade {
  WELCOME = "WELCOME",
  GREEN = "GREEN",
  GOLD = "GOLD",
}

function getDiscount(v: StarbuckGrade): number {
  switch (v) {
    case StarbuckGrade.WELCOME:
      return 0;
    case StarbuckGrade.GREEN:
      return 5;
    case StarbuckGrade.GOLD:
      return 10;
  }
}

console.log(getDiscount(StarbuckGrade.GREEN)); // 5
console.log(StarbuckGrade.GREEN); // GREEN

console.log(StarbuckGrade);
// {WELCOME: "WELCOME", GREEN: "GREEN", GOLD: "GOLD"}
