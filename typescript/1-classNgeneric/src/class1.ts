interface User {
  name: string;
}

interface Product {
  id: string;
  price: number;
}

class Cart {
  // protected user: User;
  // private store: object;
  // constructor 부분에 접근제한자 키워드를 매개변수 앞에 작성하면 this.user = user; protected user: User를 단축해서 사용할 수 있다.
  // 네줄의 코드를 한줄의 코드로 단축 가능!
  constructor(protected user: User, private store: object = {}) {
    // this.user = user;
    // this.store = {};
  }

  public put(id: string, product: Product) {
    this.store[id] = product;
  }

  private get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  // protected일 경우 하위 class에서 사용 가능 private는 불가능
  addPromotion() {
    this.user;
  }
}

const cartJohn = new Cart({ name: "John" });
cartJohn.put("1", { id: "1", price: 5000 });
console.log(cartJohn);
const cartJay = new Cart({ name: "Jay" });
