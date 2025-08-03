//Generics

//TR
//Tek bir fonksiyonu hem number[], hem string[], hem de User[] gibi farklı türlerde çalıştırmak istiyorsun 
// ama tür güvenliği bozulmasın istiyorsun.

//EN
//You want to use a single function on different types such as number[], string[], and User[], 
// but you want to keep type safety intact.

function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Uğur")); // Uğur
console.log(identity<number>(42));     // 42


// T bir generic tür parametresi
// value: T → herhangi bir tür olabilir
// : T → dönen değer de aynı tür



//Generic array

function firstItem<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstItem([1, 2, 3]));          // 1
console.log(firstItem(["a", "b", "c"]));    // a



//Multiple Generic

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

const result = pair<string, number>("id", 123);
// result: ["id", 123]






//Generic interface

interface ApiResponse<T> {
  status: number;
  data: T;
}

const response1: ApiResponse<string> = {
  status: 200,
  data: "OK",
};

const response2: ApiResponse<number[]> = {
  status: 200,
  data: [1, 2, 3],
};




//Generic class

class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Hello


