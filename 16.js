// **Question 6: Merge Two Sorted Arrays**

// Write a function `mergeSortedArrays` that takes two sorted arrays as input and merges them into a single sorted array.

// 1)
// function mergeSortedArrays(arr1,arr2){
//     return arr1.concat(arr2).sort((a,b)=> a-b)
// }



// const inputArray1 = [1, 3, 5];
// const inputArray2 = [2, 4, 6];
// const output = mergeSortedArrays(inputArray1, inputArray2);
// console.log(output); // [1, 2, 3, 4, 5, 6]


// function mergeSortedArrays(arr1,arr2){
//     let final=[]
//     while(arr1.length&&arr2.length){
//         const next=(arr1[0]<arr2[0])?arr1.shift():arr2.shift()
//         final.push(next)
//     }
//     if(arr1.length){
//         final=final.concat(arr1)
//     }
//     if(arr2.length){
//         final=final.concat(arr2)
//     }
//     return final
// }


// const inputArray1 = [1, 3, 5];
// const inputArray2 = [2, 4, 6];
// const output = mergeSortedArrays(inputArray1, inputArray2);
// console.log(output); // [1, 2, 3, 4, 5, 6]



function mergeSortedArrays(arr1,arr2){
    const resultantArr=[]
    for(let val of arr1){
        resultantArr.push(val)
    }
     for(let val of arr2){
        resultantArr.push(val)
    }
    return resultantArr.sort((a,b)=> a-b)
}


 const inputArray1 = [1, 3, 5];
const inputArray2 = [2, 4, 6];
const output = mergeSortedArrays(inputArray1, inputArray2);
console.log(output); // [1, 2, 3, 4, 5, 6]


