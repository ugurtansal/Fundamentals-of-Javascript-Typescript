//Global Scope

let globalVar = "I am global";

function sayHello() {
  console.log(globalVar);
}

sayHello();  // "I am global"


//Function Scope

function greet() {
  let message = "Hello!";
  console.log(message); // access
}

greet();
// console.log(message); // ❌ ReferenceError: message is not defined


//Block Scope
if (true) {
  let color = "blue";
  console.log(color); // ✅ access
}
// console.log(color); // ❌ ReferenceError


if (true) {
  var number = 42;
}
console.log(number); // ✅ access





//Hoisting

console.log(a); // undefined
var a = 5;


var b;
console.log(b); // undefined
b = 5;



console.log(c); // ❌ ReferenceError
let c = 10;



//Function Hoisting


   //Function Declaration 
        sayHi(); // ✅ "Hi"

        function sayHi() {
        console.log("Hi");
        }

    //Function Expression

        sayBye(); // ❌ TypeError: sayBye is not a function

        var sayBye = function() {
        console.log("Bye");
        };


