function greet() {
  console.log("Good Morning");
}
greet();

function mul(a, b) {
  console.log(a * b);
}
mul(20, 30);

function add(a, b = 40) {
  console.log(a + b);
}
add(10);
add(10, 60);
add(10, 10);

function sum(a, b) {
  console.log("Before Return Statement");
  return a + b;
  console.log("After Return Statement");
}
let s = sum(10, 20);
console.log(s);
