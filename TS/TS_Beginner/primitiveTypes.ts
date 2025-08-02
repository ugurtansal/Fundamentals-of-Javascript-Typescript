//Strings

let userName: string = "Uğur";
let message: string = `Hello, ${userName}`;

//Number
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xff;
let binary: number = 0b1010;



//Boolean
let isOnline: boolean = true;
let isAdmin: boolean = false;



//Any
let value: any = 42;
value = "now a string";
value = true;
    //EN
    //any disables TypeScript checking, so you should only use it in mandatory cases (for example: data coming from an unknown JSON).
   
    //TR
    //any, TypeScript’in kontrolünü devre dışı bırakır. Bu yüzden sadece zorunlu durumlarda kullanmalısın (örneğin: bilinmeyen bir JSON'dan gelen veri).



//Unknown

    //TR
    //unknown, any gibi her tür veriyi alabilir ama onu kullanmadan önce türünü kontrol etmek zorundasın. Bu yüzden any'den daha güvenlidir.

    //EN
    //unknown can take any type of data like any but you have to check its type before using it. That's why it is safer than any.


let result: unknown;

result = 10;
result = "text";

if (typeof result === "string") {
  console.log(result.toUpperCase()); 
}




//Never

//TR
//never, fonksiyonun hiçbir zaman sonlanmayacağını gösterir. Hatalar veya sonsuz döngülerde kullanılır.

//EN
//The never parameter indicates that the function will never terminate. It is used in cases of errors or infinite loops.

function throwError(message: string): never {
  throw new Error(message);
}


function infiniteLoop(): never {
  while (true) {
    
  }
}


