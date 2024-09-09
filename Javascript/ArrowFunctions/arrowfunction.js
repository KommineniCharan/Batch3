//short form of writing a function is called as fat arrow functions/arrow functions

function wish() {
  console.log("Hello Good Morning");
}
wish();

let wishh = () => {
  console.log("Fat Arrow Function");
};
wishh();

(() => {
  console.log("Immediate Invoking Function");
})();

let sum = (a, b) => {
  //console.log(a + b);
  return a + b;
};
let s = sum(20, 50);
console.log(s);
