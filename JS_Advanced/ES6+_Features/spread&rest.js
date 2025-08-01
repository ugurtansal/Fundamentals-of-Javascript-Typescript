//Spread (Yayma) – kopyalama, birleştirme için

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]


const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
console.log(obj2); // { a: 1, b: 2 }




//Rest (Toplama) – fonksiyon parametreleri için

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }


//Example-2 => First Parameter is Fixed, Others are Dynamic
function greet(firstName, ...titles) {
  console.log(`Hello ${firstName}`);
  console.log("Titles:", titles);
}

greet("Uğur", "Engineer", "Developer", "Mentor");
// Hello Uğur
// Titles: ["Engineer", "Developer", "Mentor"]




//Example-3 =>Argument Filtering
function filterNumbers(min, ...nums) {
  return nums.filter(n => n >= min);
}

console.log(filterNumbers(10, 5, 8, 12, 20));
// Çıktı: [12, 20]




//Example-4=>Average Calculation with Rest Parameter
function average(...scores) {
  const total = scores.reduce((sum, s) => sum + s, 0);
  return total / scores.length;
}

console.log(average(80, 90, 100)); // 90

