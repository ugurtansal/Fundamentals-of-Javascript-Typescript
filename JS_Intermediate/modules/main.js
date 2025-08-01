//What is a Module?
//A module is a separate JavaScript file containing functions, variables, classes, etc., that can be exported and imported.
//With a modular structure:

//Code can be broken down

//Code duplication is reduced

//Testing and implementation are easier





import { add, multiply, PI } from "./math.js";
//import * as math from "./math.js"; =>All of math.js

import log from "./logger.js";



log("Hello world");

console.log(add(3, 4));         // 7
console.log(multiply(2, 5));    // 10
console.log(PI);                // 3.14159
