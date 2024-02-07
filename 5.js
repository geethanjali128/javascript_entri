// **5. Reverse a String:**
// Write a program to reverse a string using a `for` loop.

const str="sankaranthi"
let reverseStr=" "
for(let i=str.length-1;i>=0;i--){
    reverseStr+=str[i]
}
console.log(reverseStr)
