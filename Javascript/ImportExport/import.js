const { gst, tds } = require("./export");

let total = 200;

let sub = total + gst - tds;
console.log(sub);
