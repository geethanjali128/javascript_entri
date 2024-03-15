// **Question 2: Find the Maximum Number in an Array**

// 1)
// function findMax(arr){
//     const output=arr.reduce((acc,curr)=>{
//         // if(curr>acc){
//         //     acc=curr
//         //     }
//         //     return acc
//         // or
//         return curr>acc?curr:acc
//     },-Infinity)
//     return output
// }

// const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); // 9

// 2)
// function findMax(arr){
//     let max=0
//     for(let val of arr){
//         if(val>max){
//             max=val
//         }
//     }
//     return max
// }
// const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); // 9

// 3)
// function findMax(arr){
//     let max=0
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); // 9


//  function findMax(arr){
//     let max=arr[0]
//     for(let i=1;i<=arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// const input = [3, 7, 1, 9, 5];
// const output = findMax(input);
// console.log(output); // 9


// The Math.max() method returns the number with the highest value.
// Math.max() is a ES6 feauture

function findMax(arr){
    return arr.reduce((maxNum,num)=>
    
        Math.max(maxNum,num)
  
    )
}
const input = [3, 7, 1, 9, 5];
const output = findMax(input);
console.log(output); // 9

