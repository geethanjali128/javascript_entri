// **7. Count Digits in a Number:**
// Write a program to count the number of digits in a given number `n` using a `for` loop.


const n=12345
let count=0
let temp=n
while(temp!==0){
    count++
    // console.log(count)
    temp=Math.floor(temp/10)    //The Math.floor() method rounds a number DOWN to the nearest integer.
    // console.log(temp)

}
console.log(count)




// 2)
let str=n.toString()
// console.log(str)
let str1=str.split('')
// console.log(str1)
let digits=str1.length
console.log(digits)




