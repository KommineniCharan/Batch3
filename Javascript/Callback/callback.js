// Calling a function inside another function as a parameter is called
// Callback Function

let sum = (a, b) => {
  return a + b;
};

let sub = (a, b) => {
  return a - b;
};

let mul = (a, b) => {
  return a * b;
};

let calculate = (a, b, c) => {
  return c(a, b);
};

let result = calculate(20, 30, sum);
let result2 = calculate(23, 30, sub);
let result3 = calculate(20, 30, mul);
console.log(result);
console.log(result2);
console.log(result3);
