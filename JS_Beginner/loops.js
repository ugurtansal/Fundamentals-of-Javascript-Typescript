let x = 5;

do {
  console.log("Value:", x);
  x++;
} while (x < 5);



let counter = 0;

while (counter < 3) {
  console.log("While loops:", counter);
  counter++;
}


for (let i = 0; i < 5; i++) {
  console.log("Counter:", i);
}


//for..of => Used to loop through the elements of an array.

const meyveler = ["elma", "armut", "muz"];

for (const meyve of meyveler) {
  console.log("Meyve:", meyve);
}



//for..in=>Used to loop over the properties of an object.

const araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2020
};

for (const ozellik in araba) {
  console.log(`${ozellik}: ${araba[ozellik]}`);
}



