var emp = { id: 101, name: "hello", sal: 45000 };
console.log(emp);
console.log(emp.id);
console.log(emp.name);
console.log(emp.sal);

emp.email = "hello@gmail.com";
delete emp.sal;

console.log("Using For in Method");
for (emps in emp) {
  console.log(emp[emps]);
}

let sizes = {
  id: 101,
  name: "test",
  city: ["Bangalore", "Hyderabad", "Mysore", "Delhi"],
};

console.log("Sizes Method");
for (size in sizes) {
  console.log(sizes[size]);
}

console.log(sizes.city[0]);
console.log(sizes.name);
console.log(sizes.city[1]);
