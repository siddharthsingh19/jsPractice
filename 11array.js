// wap to find the number of even digits in an array of integers.

let arrr = [1,2,3,4,5,6,7,8,9,10]
let c = 0
const checking = (arr) => {
    for (let i = 0; i<arr.length; i++){
        arr[i] %2 == 0 ? c+=1 : c
    }
    console.log(c)
} 

checking(arrr)