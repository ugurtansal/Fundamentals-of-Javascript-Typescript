//Destructuring (Yapı Bozma)


//Array Destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20


const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]



//Object Destructuring
const user = {
  name: "Uğur",
  age: 25,
  city: "Adana"
};

const { name, age } = user;

console.log(name); // Uğur
console.log(age);  // 25

//name changing
const { city: hometown } = user;
console.log(hometown); // Adana
