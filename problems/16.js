// **Question 6: Merge Two Sorted Arrays**

// Write a function `mergeSortedArrays` that takes two sorted arrays as input and merges them into a single sorted array.

// 1)optimoize solution

// function mergeSortedArrays(arr1,arr2){
//   let finalArray=[]

// // while condition=arr1 and arr2 is not empty,and loop it till it's not empty
// // in while= if arr1[0] is less than arr2[0],then remove arr1[0] otherwise remove arr2[0]
// // and then push that removed element into the final array 
//  while(arr1.length&&arr2.length){
//         const next = (arr1[0]<arr2[0])?arr1.shift():arr2.shift()
//         finalArray.push(next)
//     }

//     // after while loop condition ,if there are any elements left in that both arrays we conacat it with finalArray
//     if(arr1.length){
//         finalArray=finalArray.concat(arr1)
//     }
//     else if(arr2.length){
//          finalArray=finalArray.concat(arr2)
//     }
//     return finalArray
// }


// const inputArray1 = [1, 3, 5];
// const inputArray2 = [2, 4, 6];
// const output = mergeSortedArrays(inputArray1, inputArray2);
// console.log(output); // [1, 2, 3, 4, 5, 6]




// 2)usign concat and sort
// function mergeSortedArrays(arr1,arr2){
  //// concatinating the two sorted arrays and storing into a varible merge
//     const merge=arr1.concat(arr2)
    ////sorting the merged array= variable(merge)
//   const mergeSorted= merge.sort((a,b)=>{
//         return a-b
//   })

//     return mergeSorted
// }

// const inputArray1 = [1, 3, 5];
// const inputArray2 = [2, 4, 6];
// const output = mergeSortedArrays(inputArray1, inputArray2);
// console.log(output); // [1, 2, 3, 4, 5, 6]


// 3)taking empty array and pushing these tow sorted arrays elements into that empty array and return that  to be sorted

// function mergeSortedArrays(arr1,arr2){
//   // first taking an empty array to add that two sorted array elements
//   let result=[]
//   // iterate the elements of the first sorted array(arr1)
//   for(let i=0;i<arr1.length;i++){
//     // append each element of arr1 to the result array
//     result.push(arr1[i])
//   }
//    // iterate the elements of the second sorted array(arrr)
//   for(let i=0;i<arr1.length;i++){
//     // append each element of arr2 to the result array
//     result.push(arr2[i])
//   }
  
//   const mergeSorted=result.sort((a,b)=>{return a-b})
//   return mergeSorted
// }

// const inputArray1 = [1, 3, 5];
// const inputArray2 = [2, 4, 6];
// const output = mergeSortedArrays(inputArray1, inputArray2);
// console.log(output); // [1, 2, 3, 4, 5, 6]

function mergeSortedArrays(arr1,arr2){
  let mergedArray=[]
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(arr1[i]<arr2[j]){
        mergedArray.push(arr1[i])&&i++
      }
      else if(arr2[j]<arr1[i]){
        mergedArray.push(arr2[j])&&j++
      }
      else if(arr1[i]===arr2[j]){
        mergedArray.push(arr1[i])&&i++
      }
    }
  }
  return mergedArray
}

const inputArray1 = [1, 3, 5];
const inputArray2 = [2, 4, 6];
const output = mergeSortedArrays(inputArray1, inputArray2);
console.log(output); // [1, 2, 3, 4, 5, 6]
