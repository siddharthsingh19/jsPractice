const prompt = require("prompt-sync")({ sigint: true });

const str = prompt("Enter filename")

// console.log(strArr)
// console.log("Extension of your file is " + `"${strArr[strArr.length - 1]}"`);


// OR

const getExtn = (str) => str.slice(str.lastIndexOf('.'))

console.log(getExtn(str))