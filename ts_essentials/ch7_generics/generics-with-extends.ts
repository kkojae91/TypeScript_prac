// extends의 개념은 string | number만 T에 올 수 있다는 의미!!
// class의 extend와는 다르다!!
// type은 항상 가장 작은 부분으로 설정해주는게 좋다.
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("kkojae");
new PersonExtends(31);
new PersonExtends(true);
