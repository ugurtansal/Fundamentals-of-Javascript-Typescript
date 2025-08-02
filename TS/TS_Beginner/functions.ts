function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Harry")); // Hello, Harry!


//non-return

function logMessage(message: string): void {
  console.log(message);
}


//Optional Prameter

function greetPeople(name: string, title?: string): string { //Title is optional
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}

console.log(greetPeople("Uğur"));           // Hello, Uğur
console.log(greetPeople("Uğur", "Mr."));    // Hello, Mr. Uğur




//Default Parameter

function greetPeopleDefault(name: string, greeting: string = "Hello"): string {  //Greeting is default value Hello
  return `${greeting}, ${name}`; 
}

console.log(greetPeopleDefault("Uğur"));                    // Hello, Uğur
console.log(greetPeopleDefault("Uğur", "Welcome back"));    // Welcome back, Uğur





//Function Type Definition

//TR
//Bu stil genellikle callback fonksiyonlar ve event handler'larda işe yarar.

//EN
//This style generally works well for callback functions and event handlers.

/*
const functionName: (param1: Type, param2: Type) => ReturnType = (param1, param2) => {
  // transactions
  return ...;
};

*/

const applyDiscount: (price: number, discountRate: number) => number = (price, discountRate) => {
  return price - (price * discountRate);
};

console.log(applyDiscount(100, 0.2)); // 80
console.log(applyDiscount(250, 0.1)); // 225



