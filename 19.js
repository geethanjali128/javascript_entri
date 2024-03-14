// 9. Write a function `reverseWords` that takes a string as input and returns the string with its words reversed.

function reverseWords(string){

    // return string.split(/\s+/g).reverse().join(" ")
            // (or)

//     let result=""
//     const arr=string.split(/\s+/g)
//    for(let i=arr.length-1;i>=0;i--){
//         result+=arr[i]+" "
//    }
//    return result

   return string.match(/\S+/g).reverse().join(" ")
}


 const input = "Hello world";
   const output = reverseWords(input);
   console.log(output); // "world Hello"
