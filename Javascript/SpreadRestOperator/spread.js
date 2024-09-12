// Spread Operator is used to copy the current object values 
// into the new object. This can be denoted with "..."

let emp = {id:101, name:"preeti"}
let details = {email: "preeti@gmail.com", location: "Bangalore"}

let emp1={...emp}

console.log(emp);
console.log(emp1);

let data = {...emp, ...details}
console.log(data);
