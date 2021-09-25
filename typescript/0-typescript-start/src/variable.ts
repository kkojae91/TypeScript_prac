var score1 = 0;
let score2 = 100;
const defaultScore = 0;

// var 는 함수 단위 변수를 설정...
function outer() {
  if (true) {
    var score = 0;
  }

  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      // i 는 1, 2, 3이 아닌 3, 3, 3의 출력을 같는다.
      console.log(i);
    }, 100);
  }

  // scope 밖에서도 score변수를 불러올 수 있다.
  console.log(score);
}

outer();

// let은 블록 scope 단위 변수를 설정.. (const 역시 let과 동일하나 const는 상수)
function letOuter() {
  if (true) {
    // type annotaion 설정 할 수 있다. [변수명: 타입 = 0;]
    let score: number = 0;
    // type annotation이 number로 설정될 경우 해당 변수에 number이외의 타입을 가진 값은 할당 할 수 없다.
    // 아래와 같이 문자열 0을 할당할 경우 error 발생
    // score = '0';

    // const는 상수 (변하지 않는 수)이기 때문에 값을 재할당하면 error 발생
    const constScore: number = 100;
    // constScore = 90;
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      // i는 예상하는 대로 100초 뒤에 1, 2, 3의 출력 값을 같는다.
      console.log(i);
    }, 100);
  }
  // scope 밖에서 호출 할 경우 error 발생
  // console.log(score);
}

// const는 블록 scope 단위 변수를 설정..
