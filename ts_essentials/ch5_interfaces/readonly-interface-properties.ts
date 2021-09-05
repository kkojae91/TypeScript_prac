interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "kkojae",
  gender: "male",
};

// readonly property 때문에 속성값을 바꿀 수 없다. error 발생
// 컴파일 타임에 한번 설정되었는데 바뀌지 않는 값일 경우 readonly 속성을 붙여줌으로서 해당 값이 변경되는 일을 미리 방지해줄 수 있다.
// p81.gender = "female";
