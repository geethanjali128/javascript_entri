// **Question 4: Remove Duplicates from an Array**

// Write a function `removeDuplicates` that takes an array of numbers as input and returns a new array with duplicate values removed.

// 

// function removeDuplicates(arr){
//     const newArr=[]
//     for(let val of arr){
//         if(!newArr.includes(val)){
//             newArr.push(val)
//         }
//     }
//     return newArr
// }

// const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); // [1, 2, 3, 4, 5]



// function removeDuplicates(arr){
//    return [... new Set(arr)]
// }

// const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); // [1, 2, 3, 4, 5]



// function removeDuplicates(arr){
//   return arr.filter((val,index)=>{
//         return arr.indexOf(val)==index
// })
// }

// const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); // [1, 2, 3, 4, 5]


function removeDuplicates(arr){
 return arr.reduce((acc,curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr)
    }
    return acc
 },[])
}



const input = [1, 2, 2, 3, 4, 4, 5];
const output = removeDuplicates(input);
console.log(output); // [1, 2, 3, 4, 5]
