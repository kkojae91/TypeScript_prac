"use strict";
// object 리터럴 타입
// person1 is not 'object' type
// person1 is "{name: string, age: number}" type
var person1 = {
    name: "kkojae",
    age: 31,
};
// create by Object.create()
var person2 = Object.create({
    name: "jaejeung",
    age: 31,
});
var obj1 = {};
obj1 = { name: "mark" };
obj1 = [{ name: "mark" }];
create({ prop: 0 });
create([{ o: 123 }]);
create(null);
// 아래와 같은 타입은 적용될 수 없다.
// create(32);
// create('kkojae');
// create(false);
// create(undefined);
