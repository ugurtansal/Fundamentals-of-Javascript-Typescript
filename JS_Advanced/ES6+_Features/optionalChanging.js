//Optional Chaining (?.)


//TR
//Bir nesnede olmayan bir değere erişmeye çalışırsan hata alırsın.
//Optional chaining, böyle durumlarda hata atmadan undefined döndürür.


//EN
//If you try to access a value that doesn't exist in an object, you'll get an error.
//Optional chaining returns undefined without throwing an error in such cases.


const user = {};
console.log(user.address.city); //TypeError

const user2 = {};
console.log(user2.address?.city); // undefined => not error


//Mini app
const student = {
  name: "Uğur",
  scores: {
    math: 95
  }
};

// Optional chaining
console.log(student.scores?.math); // 95
console.log(student.scores?.physics); // undefined

// Template literal + destructuring
const { name } = student;
console.log(`Student's name is ${name}`);

