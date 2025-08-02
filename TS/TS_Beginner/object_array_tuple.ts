
//Object Types

const user: { name: string; age: number; isAdmin: boolean } = {
  name: "Uğur",
  age: 25,
  isAdmin: true,
};


//TR
//Eğer aynı yapı birden çok kez kullanılacaksa, type veya interface ile tanımlanır:

//EN
//If the same structure is to be used more than once, it is defined with a type or interface:

type UserType = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const ut1: UserType = {
  name: "Uğur",
  age: 25,
  isAdmin: true,
};




//Array Types

let names: string[] = ["Uğur", "Ali", "Ayşe"];
let ages: number[] = [20, 25, 30];
let flags: boolean[] = [true, false, true];


//second way

let names2: Array<string> = ["Uğur", "Ali"];


//Complex type array

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Phone", price: 10000 },
  { id: 2, name: "Laptop", price: 30000 },
];









//Tupe Type

//TR
//Tuple, TypeScript’te sabit sayıda ve sıralı türleri olan dizi demektir. Yani her elemanın türü ve sırası bellidir.

//EN
//A tuple in TypeScript is an array with a fixed number of ordered types. This means that each element has a specific type and order.

let userInfo: [string, number, boolean] = ["Uğur", 25, true];
//Sıralama önemli !!!!



