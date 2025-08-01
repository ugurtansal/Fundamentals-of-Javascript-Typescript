//What is a Callback Function?
//A callback is a function passed as a parameter to another function and is usually executed when an operation completes.

//Because functions in JavaScript are also "values," they can be assigned to a variable or passed as a parameter, just like a number or string.


//Why Use Callbacks?

//Asynchronous operations (data retrieval, timer, animation)
//Controlling the sequence of code
//Ensuring that another task is triggered after the task is completed

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Harry", sayBye);



//Callback with setTimeout

function doSomething(callback) {
  console.log("Starting...");

  setTimeout(() => {
    console.log("Finished!");
    callback();
  }, 2000);
}

doSomething(() => {
  console.log("Callback executed.");
});






