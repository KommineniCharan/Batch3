var a = "Hello";

//length
console.log(a);
console.log(a.length);

//includes
console.log(a.includes("e"));

//replace
var b = a.replace("Hel", "Good");
console.log(b);

//replaceAll
var c = a.replaceAll("Hello", "Good Morning");
console.log(c);

//charAt
console.log(a.charAt(1));

//Uppercase
var d = a.toLocaleUpperCase();
console.log(d);

//Lowercase
var e = d.toLocaleLowerCase();
console.log(e);

var f = "GoodMorning";
//substring
//Here 5 is the index of f and 9 is the length of the string
console.log(f.substring(5, 9));
