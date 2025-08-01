
//EN
//Closures in JavaScript allow functions defined within other functions to access the variables of the outer function. 
// This can be both very powerful and confusing at first.
//A closure is a function's access to its own scope, the scope of its parent function, and the global scope.

//What is the Use of Closure?
//Data storage (state)
//Encapsulation
//Reusable structures




//TR
//Closures, JavaScript’te fonksiyonların diğer fonksiyonlar içinde tanımlandığında dış fonksiyonun değişkenlerine erişebilmesini sağlar.
//  Bu hem çok güçlü hem de başlangıçta kafa karıştırıcı olabilir
//Bir closure, bir fonksiyonun kendi kapsamına (scope), üst fonksiyonun kapsamına ve global scope’a erişebilmesidir.

//Closure Ne İşe Yarar?
// Veri saklama (state)
//Değişkeni gizleme (encapsulation)
//Tekrar kullanılabilir yapılar


//Examples
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Current count:", count);
  };
}

const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1 (farklı sayacı başlattı)




function createUser(name) {
  let score = 0;

  return {
    sayHi: function () {
      console.log("Hi, I'm " + name);
    },
    increaseScore: function () {
      score++;
      console.log("Score:", score);
    }
  };
}

const user = createUser("Harry");
user.sayHi();           // Hi, I'm Harry
user.increaseScore();   // Score: 1
user.increaseScore();   // Score: 2
// score dışarıdan erişilemez
// console.log(user.score); // undefined
