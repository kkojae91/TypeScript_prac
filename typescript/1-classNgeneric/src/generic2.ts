class LocalDB<T> {
  constructor(private localStorageKey: string) {}

  add(v: T) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }

  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return v ? JSON.parse(v) : null;
  }
}

interface User {
  name: string;
}

const userDb = new LocalDB<User>("user");
userDb.add({ name: "kkojae" });
const userA = userDb.get();
userA.name;

interface Vegitable {
  v: string;
}

interface Meat {
  m: string;
}

interface Cart2<T> {
  // generic을 통해 삼항 연산자를 extends해서 사용할 수 있다.
  getItem(): T extends Vegitable ? Vegitable : Meat;
}

const cart2: Cart2<Vegitable> = {
  getItem() {
    return {
      v: "",
    };
  },
};

cart2.getItem();
