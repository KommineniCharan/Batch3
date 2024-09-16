setTimeout(() => {
  console.log("Timeout after 2 Seconds");
}, 10000);

console.log("Outside the timeout");

setInterval(() => {
  console.log("Set Time Interval each 2 seconds");
}, 2000);
