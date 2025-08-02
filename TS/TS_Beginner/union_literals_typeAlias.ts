

//Union Types


//TR
//Birden fazla türden herhangi biri olabilir.

//EN
//It can be any of more than one type.

let valueOfVariable: string | number;

valueOfVariable = "Uğur";   
valueOfVariable = 42;       
// value = true;  // Error


//In function
function printId(id: string | number) {
  console.log("ID:", id);
}

printId(123);
printId("abc");





//Literal Types

//TR
//Belirli bir sabit değeri kabul etmesini sağlar.

//EN
//Allows it to accept a specific constant value.

let direction: "up" | "down" | "left" | "right";

direction = "up";    // No Problem
// direction = "diagonal"; // Error







// Type Alias

//TR
//Karmaşık yapıların tekrar kullanılabilir adını tanımlar.

//EN
//Defines a reusable name for complex structures.

type ID = string | number;

let userId: ID = "abc123";
userId = 789;



//In object

type User = {
  name: string;
  age: number;
};

const u1: User = {
  name: "Harry",
  age: 25,
};


// Nullable 

let comment: string | null = null;

comment = "Nice!";
