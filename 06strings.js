// wap to create a new string from a given string taking the first three characters and the last three characters of a string and adding them together. the string length must be three or more , if not, the original string is returned.

let str = "holasapola";
// let str = "hol";

if (str.length > 3) {
    let newStr = str.slice(0,3) + str.slice(-3)
    console.log(newStr)
} else console.log(str);

