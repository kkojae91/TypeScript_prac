// function
type EatType = (food: string) => void;
interface IEat {
  (food: string): void;
}

// array
type PersonList = string[];
interface IPersonList {
  [index: number]: string;
}

// intersection
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}
interface ArtistsData {
  artists: { name: string }[];
}

type ArtistsResponseData = ArtistsData & ErrorHandling;
interface IArtistsResponseData extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseData;
let iart: IArtistsResponseData;

// union type
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

// union type을 설정할 경우 확장하거나, 클래스에 implements 할 수 없다.
// 아래와 같이는 사용할 수 없다.
// interface IPet extends PetType {}
// class Pet implements PetType {}

// declaration merging - interface
interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi1: MergingInterface = {
  a: "a",
  b: "b",
};
mi1.a = "c";
mi1.b = "d";

// declatation merging - type alias
type MergingType = {
  a: string;
};
// 아래와 같이 한 번 더 사용하게 되면 중복 error 발생한다.
// type MergingType = {
//   b: string;
// };
