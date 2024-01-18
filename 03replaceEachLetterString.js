// wap to replace each letter in a string to the next letter.

let stringforchange = "abcde"
let newStr = ""

const replaceLetter = (str) => {
    for (let i =0; i< str.length; i++){
        let charCode = str.charCodeAt(i)
        charCode+=1
        newStr+=String.fromCharCode(charCode)
    }
    return newStr
}
replaceLetter(stringforchange)
console.log(newStr)