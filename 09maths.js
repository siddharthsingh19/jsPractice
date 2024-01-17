// given two values, wap to check which one is closer to 100.

let num1 = 40
let num2 = 70

const near100 = (n1,n2) => {
let x = 100 - n1
let y = 100 - n2
x>y ? console.log(`${n2} is near 100`) : console.log(`${n1} is near 100`)
}

near100(num1,num2)