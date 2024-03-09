// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

function reverseString(input){
    let reverseStr=" "
    for(let i=input.length-1;i>=0;i--){
        reverseStr+=input[i]
    }
    return reverseStr
}

const input = "hello";
const output = reverseString(input);
console.log(output); // "olleh"



function reverseString(input){
   const arr=input.split("")
   const reverse=arr.reverse()  //revrse() is an array method
   return reverse.join("")
}

// const input = "hello";
// const output = reverseString(input);
// console.log(output); // "olleh"

