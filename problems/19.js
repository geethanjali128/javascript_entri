// 9. Write a function `reverseWords` that takes a string as input and returns the string with its words reversed.

// function reverseWords(input){
//     const splitInput=input.match(/\S+/g)   // or input.split(" ")
//    const reverseSplitInput=splitInput.reverse()
//     const result=reverseSplitInput.join(" ")
//     return result
// }

//   const input = "Hello world";
//    const output = reverseWords(input);
//    console.log(output); // "world Hello"


   function reverseWords(input){
    const arr=input.split(/\s+/g)   // or input.split(" ")
   let reverseWords=""
   for(let i=arr.length-1;i>=0;i--){
    reverseWords+=arr[i]+" "
   }
   return reverseWords
}

  const input = "Hello world";
   const output = reverseWords(input);
   console.log(output); // "world Hello"

