
//Class and Constructor

class PersonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I’m ${this.name} and I’m ${this.age} years old.`);
  }
}

const person = new PersonClass("Uğur", 25);
person.greet(); // Hi, I’m Uğur and I’m 25 years old.



//Public 
class PersonPublic {
  public name: string = "Uğur";

  public greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

//private

class UserPrivate {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  revealPassword(): void {
    console.log(this.password); // access
  }
}

const u = new UserPrivate("12345");
// console.log(u.password);  Error



//Readonly

//readonly: Sadece ilk atamada (constructor’da) set edilebilir, sonra değiştirilemez.

class Config {
  readonly appName: string;

  constructor(appName: string) {
    this.appName = appName;
  }
}

const cfg = new Config("TestApp");
// cfg.appName = "NewName";  Error





//Extends

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Rex");
d.speak(); // Rex barks.






//implements

//Sınıfın belirli bir şablona uymasını sağlar.
interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  draw(): void {
    console.log("Drawing a circle");
  }
}
