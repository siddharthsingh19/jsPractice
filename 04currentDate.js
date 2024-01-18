// wap to get the current date.
// expected output:
// mm-dd-yyyy or dd-mm-yyyy or mm/dd/yyyy or dd/mm/yyyy


const date = new Date();
console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)