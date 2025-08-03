//Type Narrowing (Tür Daraltma)


//TR
//TypeScript’te bir değişken birden fazla türde olabilir.
//Type Narrowing, bu değişkenin çalışma zamanında hangi tür olduğunu belirleyip ona göre işlem yapmamızı sağlar.

//EN    
//In TypeScript, a variable can have more than one type. 
// Type Narrowing allows us to determine the type of this variable at runtime and act accordingly.




//typeof

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}


//in operator

interface Admin {
  name: string;
  isAdmin: boolean;
}

interface User {
  name: string;
}

function checkUser(person: Admin | User) {
  if ("isAdmin" in person) {
    console.log(`${person.name} is an admin`);
  } else {
    console.log(`${person.name} is a user`);
  }
}






//instanceof => for class

class MyDog {
  bark() {
    console.log("woof");
  }
}

class MyCat {
  meow() {
    console.log("meow");
  }
}

function speak(pet: MyDog | MyCat) {
  if (pet instanceof MyDog) {
    pet.bark();
  } else {
    pet.meow();
  }
}


//Type Guards

//isX()

type MyAnotherDog = { kind: "dog"; bark(): void };
type MyAnotherCat = { kind: "cat"; meow(): void };

function isDog(animal: MyAnotherDog | MyAnotherCat): animal is MyAnotherDog {
  return animal.kind === "dog";
}

function makeSound(pet: MyAnotherDog | MyAnotherCat) {
  if (isDog(pet)) {
    pet.bark(); // TS burada artık pet: Dog olduğunu biliyor
  } else {
    pet.meow();
  }
}


//Example of Type Guards

type MyCircle = { kind: "circle"; radius: number };
type MySquare = { kind: "square"; side: number };

function isCircle(shape: MyCircle | MySquare): shape is MyCircle {
  return shape.kind === "circle";
}

function calculateArea(shape: MyCircle | MySquare) {
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side ** 2;
  }
}

