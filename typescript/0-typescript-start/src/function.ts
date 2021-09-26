function add(x: number, y: number): number {
  return x + y;
}

const result: number = add(1, 2);

function buildUserInfo(name: string = "-", email: string = "-") {
  return { name, email };
}

const user = buildUserInfo();

const add2 = (a: number, b: number): number => a + b;

interface Storage {
  a: string;
}

interface ColdStorage {
  b: string;
}
// 오버로드 시그니처 목록
function store(type: "통조림"): Storage;
function store(type: "아이스크림"): ColdStorage;

// 실제 구현체 함수
function store(type: "통조림" | "아이스크림") {
  if (type === "통조림") {
    return { a: "통조림" };
  } else if (type === "아이스크림") {
    return { b: "아이스크림" };
  } else {
    throw new Error("unsupported type");
  }
}

const s = store("통조림");
s.a;
const s2 = store("아이스크림");
s2.b;
