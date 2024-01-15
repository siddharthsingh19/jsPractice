const prompt = require("prompt-sync")({ sigint: true });

const str = prompt("Enter filename")

const strArr = str.split(".")
console.log(strArr)
console.log("Extension of your file is " + `"${strArr[1]}"`);