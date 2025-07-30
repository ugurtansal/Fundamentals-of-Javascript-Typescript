let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

console.log(person);             // { name: "Alice", age: 25, isStudent: true }
console.log(person.name);        // "Alice"
console.log(person["age"]);      // 25


//add a properties
person.city = "New York";
console.log(person.city);        // "New York"


//update a properties 
person.age = 26;
console.log(person.age);         // 26


//delete a properties
delete person.isStudent;
console.log(person);             // { name: "Alice", age: 26, city: "New York" }


//Funciton in object

let car = {
  brand: "Toyota",
  model: "Corolla",
  start: function() {
    console.log("Engine started.");
  }
};

car.start();  // "Engine started."



//this keyword =>used to access other elements of the object

    let user = {
  name: "Bob",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

user.greet();  // "Hello, my name is Bob"



//Object in object

let student = {
  name: "Jane",
  grades: {
    math: 90,
    english: 85
  }
};

console.log(student.grades.math);   // 90





// Object.keys(), Object.values(), Object.entries()

let book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};

console.log(Object.keys(book));    // ["title", "author", "year"]
console.log(Object.values(book));  // ["1984", "George Orwell", 1949]
console.log(Object.entries(book)); // [["title", "1984"], ["author", "George Orwell"], ["year", 1949]]
