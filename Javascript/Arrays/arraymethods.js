let size = [30, 32, 34, 36, 38];

console.log(size);

//push method
size.push(40);
console.log(size);

//pop method
size.pop();
console.log(size);

//unshift
size.unshift(28);
console.log(size);

//shift
size.shift();
console.log(size);

size.splice(3, 0, 35);
console.log(size);
size.splice(4, 2, 37);
console.log(size);
size.splice(3, 1);
console.log(size);

console.log("Before Slice");
console.log(size);
let newsize = size.slice();
console.log("After Slice");
console.log(newsize);
let newsize1 = size.slice(1, 3);
console.log(newsize1);

console.log(size.includes(32));
console.log(size.indexOf(34));

console.log(size.reverse());
