
// **Question 5: Check for Palindrome**

// Write a function `isPalindrome` that takes a string as input and returns `true` if it's a palindrome (reads the same forwards and backward), and `false` otherwise

// function isPalindrome(str){
//     let j=str.length-1
   
//     for(let i=0;i<str.length/2;i++){
         
//         if(str[i]===str[j]){
           
//             return true
//         }
        
//     }
//     return false
// }




// const input = "racecar";
// const output = isPalindrome(input);
// console.log(output); // true

// function isPalindrome(input){
//     let reverse=""
//     for(let i=input.length-1;i>=0;i--){
//         reverse+=input[i]
//     }
//     return reverse===input
// }




// const input = "racecar";
// const output = isPalindrome(input);
// console.log(output); // true

// function isPalindrome(string){
//     return string===string.split("").reverse().join("")
   
// }





// const input = "racecar";
// const output = isPalindrome(input);
// console.log(output); // true


// function isPalindrome(number){
//  return number.toString()===number.toString().split("").reverse().join("")
  
// }

//  const input = 12321;
// const output = isPalindrome(input);
// console.log(output); // true

// function isPalindrome(number){
//     let temp=number
//     let reverse=0
//     while(number>0){
//         reverse=(reverse*10)+(number%10)
//         // console.log(reverse)
//         number=Math.floor(number/10)
//         // console.log("number",number)
//     }
//     return temp===reverse
// }



// const input = 121;
// const output = isPalindrome(input);
// console.log(output); // true