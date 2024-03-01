
// **Question 1: Reverse a String**

// Write a function `reverseString` that takes a string as input and returns the reverse of that string.

function reverseString(input){
    const split=input.split("")
    const reverse=split.reverse()
    return reverse.join("")
}
// const input = "hello";
// const output = reverseString(input);
// console.log(output); // "olleh"


function reverseString(input){
    let reversedString=" "
    for(let i=input.length-1;i>=0;i--){
        reversedString+=input[i]
    }
    return reversedString
}
const input = "hello";
const output = reverseString(input);
console.log(output); // "olleh"

