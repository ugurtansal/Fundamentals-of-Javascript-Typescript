//function duration

function topla(a, b) {
  return a + b;
}

console.log(topla(3, 5)); // 8


//function expression

const carp = function (a, b) {
  return a * b;
};

console.log(carp(4, 5)); // 20



//arrow function (ES6+)

const cikar = (a, b) => {
  return a - b;
};

console.log(cikar(10, 4)); // 6

//If the function is single-line, there is no need to write return and {}

const kare = x => x * x;

console.log(kare(6)); // 36



function selamla(isim = "ziyaretçi") {
  console.log("Merhaba " + isim);
}

selamla("Uğur");   // Merhaba Uğur
selamla();         // Merhaba ziyaretçi



//Nesting

function disFonksiyon(a) {
  function icFonksiyon(b) {
    return b * 2;
  }
  return icFonksiyon(a) + 1;
}

console.log(disFonksiyon(3)); // 7



//Functions can be assigned to a variable, passed as a parameter, or even return a function.
function islemSec(tip) {
  if (tip === "topla") {
    return (a, b) => a + b;
  } else {
    return (a, b) => a - b;
  }
}

const secilenIslem = islemSec("topla");
console.log(secilenIslem(4, 6)); // 10



//Scope

//Global Scope

let mesaj = "Merhaba dünya"; // global scope

function yazdir() {
  console.log(mesaj); // erişilebilir
}

yazdir();             // Merhaba dünya
console.log(mesaj);   // Merhaba dünya



//Function Scope

function ornek() {
  let gizli = "Bu sadece burada geçerli";
  console.log(gizli); //  erişilir
}

ornek();
console.log(gizli);   //  HATA: gizli is not defined


//Block Scope

{
  let x = 42;
  console.log(x); //  42
}
console.log(x);   //  HATA: x is not defined


{
  var y = 100;
}
console.log(y); //  100 (çünkü var block-scope değildir)



