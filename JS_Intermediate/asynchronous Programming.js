// Synchronous (Blocking)
console.log("1");
console.log("2");
console.log("3");


// Asynchronous (Non-Blocking)
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Output:
// 1
// 3
// 2



///setTimeout() - setInterval

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

setInterval(() => {
  console.log("This runs every second");
}, 1000);




//Callback Functions =>A function calls another function when it is finished.

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

greet("Uğur", () => {
  console.log("Welcome to async world!");
});


    //Using too many nested callbacks: Callback Hell


//Promises

//Promises are used to prevent callback hell.

let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data fetched successfully!");
  } else {
    reject("Something went wrong.");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));



  //Retrieving Data from the API with fetch()

  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));




  //async & await
  //Async functions return a promise. With await, we wait until the promise is completed.

  async function fetchPost() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchPost();









//Example usage of callback and promise (user login)

//callback

function loginUser(username, callback) {
  console.log("Checking username...");

  setTimeout(() => {
    if (username === "ugur") {
      callback(null, `Welcome ${username}`);
    } else {
      callback("User not found", null);
    }
  }, 1500);
}

loginUser("ugur", (err, message) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log(message);
  }
});




//Promise

function loginUser(username) {
  return new Promise((resolve, reject) => {
    console.log("Checking username...");

    setTimeout(() => {
      if (username === "ugur") {
        resolve(`Welcome ${username}`);
      } else {
        reject("User not found");
      }
    }, 1500);
  });
}

loginUser("ugur")
  .then((message) => console.log(message))
  .catch((err) => console.error("Error:", err));
