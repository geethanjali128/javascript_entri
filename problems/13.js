// **Question 3: Count the Occurrences of a Character in a String**

// Write a function `countChar` that takes a string and a character as input and returns the number of times that character appears in the string.

// 1)
function countChar(str,char){
   let count=0
   for(let val of str){
    if(val===char){
        count++
    }
   }
   return count
}
const inputString = "programming";
const inputChar = "m";
const output = countChar(inputString, inputChar);
console.log(output); // 2

// 2)
// function countChar(str,char){
//    let count=0
//    for(let i=0;i<=str.length;i++){
//     str[i]===char?count++:count
//    }
//    return count
// }
// const inputString = "programming";
// const inputChar = "m";
// const output = countChar(inputString, inputChar);
// console.log(output); // 2



