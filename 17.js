// **String Manipulation:**

// 7. Write a function `capitalizeFirstLetter` that takes a string as input and returns the same string with the first letter capitalized.

// function capitalizeFirstLetter(string){
//     const extract=string.slice(1)
//     return string[0].toUpperCase()+extract
// }

// const input = "hello world";
//    const output = capitalizeFirstLetter(input);
//    console.log(output); // "Hello world"


function capitalizeFirstLetter(str){
    const arr=str.split("")
    // arr.splice(arr.indexOf(arr[0]),1,arr[0].toUpperCase())
    //            (or)
    arr[0]=arr[0].toUpperCase()
    return arr.join("")
}



const input = "hello world";
   const output = capitalizeFirstLetter(input);
   console.log(output); // "Hello world"

