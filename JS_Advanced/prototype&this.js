//this keyword

const person = {
  name: "Uğur",
  greet: function () {
    console.log("Hello, I'm " + this.name);
  }
};

person.greet(); // Hello, I'm Uğur


console.log(this); // window


//Arrow function & this
const user = {
  name: "Uğur",
  greet: () => {
    console.log("Hi, I'm " + this.name);
  }
};

user.greet(); // Hi, I'm undefined 
//Arrow fonksiyon this bağlamı almaz (Arrow function does not take this context)



//Prototype

//EN
//In JavaScript, every object derives from a prototype. This prototype structure allows for inheritance.

//TR
//JavaScript’te her nesne bir prototipten türetilir. Bu prototip yapısı sayesinde miras alma (inheritance) sağlanır.


function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.name);
};

const ugur = new Person("Uğur");
ugur.sayHello(); // Hello, I'm Uğur


//TR
//JavaScript Nasıl Arar?
//JavaScript önce:

//1-ugur nesnesine bakar,

//2-orada yoksa Person.prototype'a gider,

//3-orada da bulamazsa en sonunda Object.prototype'e kadar gider.



//EN
//How Does JavaScript Search?

//JavaScript first:

//1-Looks at the ugur object,

//2-If it's not there, it goes to Person.prototype,

//3-If it can't find it there either, it finally goes to Object.prototype.



class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

const cat = new Animal("Mia");
cat.speak(); // Mia makes a sound.

//Bu da aslında arkada prototip sistemini kullanır.(This also actually uses the prototype system in the background.)



//Another Examples
function Car(brand) {
  this.brand = brand;
}

Car.prototype.honk = function () {
  console.log(this.brand + " says beep!");
};

const myCar = new Car("Toyota");
myCar.honk(); // Toyota says beep!
