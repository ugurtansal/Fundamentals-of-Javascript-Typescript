interface IUser {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user1: IUser = {
  name: "Uğur",
  age: 25,
  isAdmin: true,
};



//Extend
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

const employee: Employee = {
  name: "Uğur",
  age: 25,
  salary: 12000,
};

//Employee artık hem name hem age hem de salary alanlarına sahiptir.



//Optional in interface

interface IProduct {
  name: string;
  price: number;
  description?: string; // opsiyonel
}

const p: IProduct = {
  name: "Laptop",
  price: 25000,
};




//Functions in interface

interface Greeter {
  (name: string): string;
}

const sayHello: Greeter = (name) => `Hello, ${name}`;





//Type vs Interface

interface Car {
  brand: string;
  model: string;
}

type CarType = {
  brand: string;
  model: string;
};



//Inheritance for interface and type

interface A {
  x: number;
}

interface B extends A {
  y: number;
}

type A2 = { x: number };
type B2 = A2 & { y: number };

//Her iki yapı da aynı sonucu verir.


//TR

//interface tercih et:
//Sınıflar ile çalışıyorsan
//Genişletilecek/veri modeli tanımlıyorsan
//Ortak şablonlar oluşturacaksan


//EN

//Choose Interface:
//If you are working with classes
//If you are defining a data model that will be extended
//If you are creating common templates


