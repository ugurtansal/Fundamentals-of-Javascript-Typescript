const { isAdult } = require("./user");

test("returns true for age 25", () => {
  expect(isAdult(25)).toBe(true);
});

test("returns false for age 35", () => {
  expect(isAdult(35)).toBe(true);
});


//TR
//test(...): bir test senaryosu (a test case)

//expect(...): bir değeri test eder (tests a value)

//toBe(...): beklenen değeri belirtir (specifies the expected value)

