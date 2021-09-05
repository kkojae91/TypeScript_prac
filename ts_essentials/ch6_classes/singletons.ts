class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로 부터 만든 object가 있으면 ClassName 리턴,
    // 없다면, ClassName을 만들어서 return
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }
  private constructor() {}
}

// singletone 을 사용하려면 new라는 키워드로 object를 생성하는 것을 막아줘야한다.
// constructor를 private으로 설정하면 new 키워드를 사용할 수 없다.
// const aClass = new ClassName();
// const bClass = new ClassName();

// 2개의 object는 동일한 object이다.
const aClass = ClassName.getInstance();
const bClass = ClassName.getInstance();
console.log(aClass);
console.log(bClass);
console.log(aClass === bClass);
