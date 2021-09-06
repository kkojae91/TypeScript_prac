class Person<T, K> {
  private _name: T;
  private _age: K;
  constructor(name: T, age: K) {
    this._name = name;
  }
}

// T를 setting하지 않아도 string, number로 추론한다.
new Person("kkojae", 31);
// T를 setting하면 인자값은 무조건 setting한 값을 따라야한다.
new Person<string, number>("kkojae", 31);
