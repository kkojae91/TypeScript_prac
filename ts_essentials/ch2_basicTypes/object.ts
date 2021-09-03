// object 리터럴 타입
// person1 is not 'object' type
// person1 is "{name: string, age: number}" type
const person1 = {
  name: "kkojae",
  age: 31,
};

// create by Object.create()
const person2 = Object.create({
  name: "jaejeung",
  age: 31,
});

let obj1: object = {};
obj1 = { name: "mark" };
obj1 = [{ name: "mark" }];
// object type에는 위와 같이 array, object 사용가능
// 아래와 같이 number, string, symbol, boolean, null, undefined, bigint는 사용할 수 없다.
// 이와 같은 타입이 선언 되는 것을 막기 위해 object type을 사용한다.
// obj1 = 39;
// obj1 = 'mark';
// obj1 = Symbol();
// obj1 = true;
// obj1 = null;
// obj1 = undefined;
// obj1 = 100n;

// 함수의 인자 값을 obj | null 이외의 값은 받지 않고 return 값은 없다(:void).
declare function create(o: object | null): void;

create({ prop: 0 });
create([{ o: 123 }]);
create(null);
// 아래와 같은 타입은 적용될 수 없다.
// create(32);
// create('kkojae');
// create(false);
// create(undefined);
