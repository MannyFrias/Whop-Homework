console.log("hello world");

let num1 = prompt("Enter First Number:");
let num2 = prompt("Enter Second Number:");

// turns string into float int value
num1 = parseFloat(num1);
num2 = parseFloat(num2);

const add = num1 + num2;
const sub = num1 - num2;
const multi = num1 * num2;
const div = num1 / num2;

console.log(`Sum: ${add}`);
console.log(`Diff: ${sub}`);
console.log(`Product: ${multi}`);
console.log(`Quotient: ${div}`);
