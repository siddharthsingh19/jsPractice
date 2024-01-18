// wap to extract the first half of the string of even length.

let stringToWork = "HolaSwadha"

const even = (str) => {
    if(str.length %2 == 0) return true
}

even(stringToWork) ? console.log(stringToWork.slice(0,stringToWork.length/2)) : console.log("the string is not of even length")