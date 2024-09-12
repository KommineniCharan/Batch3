//Rest operator is used to copy the current array values into another array
//This can be denoted with "..."

let size =[30,32,34,36];
let clothes = ["Raymonds", "Allen Solly", "Tommy Hilfigher", "Polo"]

let brandsizes = [...size, ...clothes]
console.log(brandsizes)

let newsizes = [];
for(x of size){
    newsizes.push(x)
}
console.log("My New Array Sizes",newsizes)

