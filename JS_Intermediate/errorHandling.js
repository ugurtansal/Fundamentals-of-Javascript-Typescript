try {
  console.log(username); // username is not defined
} catch (err) {
  console.error("Error:", err.message); // ReferenceError: username is not defined
}




try {
  console.log("Starting...");
  throw new Error("Boom!");
} catch (err) {
  console.error("Caught:", err.message);
} finally {
  console.log("Cleanup complete.");
}




function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.error("Caught error:", err.message);
}



