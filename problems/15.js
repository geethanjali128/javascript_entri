// **Question 5: Check for Palindrome**

// Write a function `isPalindrome` that takes a string as input and returns `true` if it's a palindrome (reads the same forwards and backward), and `false` otherwise.

// 1)most efficient way
// running  the loop by condition on  half of the input length (input.length/2)

 function isPalindrome(input){
   let j=input.length-1
   for(let i=0;i<input.length/2;i++){
    if(input[i]==input[j]){
        return true
    }
   }
   return false
}

const input = "hello";
const output = isPalindrome(input);
console.log(output); // true

// 2)using for loop comparision operator

// function isPalindrome(input){
//   let reversedArray=""
//   for(i=input.length-1;i>=0;i--){
//     reversedArray+=input[i]
//   }
//   return input==reversedArray
// }

// const input = "racecar";
// const output = isPalindrome(input);
// console.log(output); // true


// 3)
// using split,reverse and join

// function isPalindrome(input){
//   const array=input.split("")
//   const reversedArray=array.reverse()
//   const join=reversedArray.join("")
  
//   return input===join
  
// }

//  const input = "racecar";
// const output = isPalindrome(input);
// console.log(output); // true

 