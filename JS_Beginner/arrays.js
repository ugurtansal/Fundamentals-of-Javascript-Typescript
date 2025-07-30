let fruits = ["apple", "banana", "cherry"];
console.log(fruits);         // ["apple", "banana", "cherry"]
console.log(fruits[0]);      // "apple"

//add to list

fruits.push("orange");       //adds to the beginning
console.log(fruits);         // ["apple", "banana", "cherry", "orange"]

fruits.unshift("kiwi");      //adds to the end
console.log(fruits);         // ["kiwi", "apple", "banana", "cherry", "orange"]


//delete from list

fruits.pop();                
console.log(fruits);         // ["kiwi", "apple", "banana", "cherry"]

fruits.shift();              
console.log(fruits);         // ["apple", "banana", "cherry"]


//number of elements

console.log(fruits.length);  // 3



//Array and loops

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}


for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}


fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});



//map 
//return new array , change all elements
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);    // ["APPLE", "BANANA", "CHERRY"]



//filter

let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);     // ["banana", "cherry"]


//includes
console.log(fruits.includes("banana"));   // true
console.log(fruits.includes("grape"));    // false

