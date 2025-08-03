//Declaration Merging (Beyanların Birleşmesi)

//TR
//Aynı isimde birden fazla interface, namespace, ya da function tanımı yaparsan TypeScript bunları otomatik olarak birleştirir.

//EN
//If you define multiple interfaces, namespaces, or functions with the same name, TypeScript will automatically merge them.


interface Guest {
  name: string;
}

interface Guest {
  email: string;
}

const g: Guest = {
  name: "Uğur",
  email: "ugur@example.com",
};



//namespace and function merging

function sayHello(name: string) {
  console.log(`Hello, ${name}`);
}

namespace sayHello {
  export function loud(name: string) {
    console.log(`HELLO, ${name.toUpperCase()}!`);
  }
}

sayHello("Uğur");          // Hello, Uğur
sayHello.loud("Uğur");     // HELLO, UĞUR!


