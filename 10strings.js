// wap to check a string contains 2 to 4 occurences of a specified character

let strrrr = "holaSonal";
let char = "o";

// let arr = strrrr.split("")
// console.log(arr)

// let newarr = arr.filter(ch => ch === char)
// console.log(newarr)

const checkOccurrences = (str, char) => {
  let occ = str.split("").filter((ch) => ch === char).length;
  if(occ >=2 && occ<=4) console.log(`occurred 2 to 4 times, precisely ${occ} `)
  else console.log(`ocurred ${occ} times`)
};
checkOccurrences(strrrr, "o");
