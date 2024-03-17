// 7. Write a function `capitalizeFirstLetter` that takes a string as input and returns the same string with the first letter capitalized.

// 1)using toUpperCase() ,slice and concat()
// function capitalizeFirstLetter(input){
//     let capitalized=input[0].toUpperCase()
//     let extracted=input.slice(1)
//     return capitalized.concat(extracted)
    
// }
//    const input = "hello world";
//    const output = capitalizeFirstLetter(input);
//    console.log(output); // "Hello world"



// 2)usign split,splice and join

function capitalizeFirstLetter(input){
    
    let arr=input.split("")
    arr.splice(0,1,arr[0].toUpperCase())
    let final=arr.join("")
    return final
}




  const input = "welcome";
   const output = capitalizeFirstLetter(input);
   console.log(output); // "Hello world"