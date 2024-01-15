const prompt = require("prompt-sync")({ sigint: true });

const num1 = Number(prompt("enter first number\n"));
const num2 = Number(prompt("enter second number\n"));


const equal100 = (num1,num2) => num1 === 100 || num2 === 100 || (Number(num1)+Number(num2)) === 100

console.log(equal100(num1, num2))