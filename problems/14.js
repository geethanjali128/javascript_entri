// **Question 4: Remove Duplicates from an Array**

// Write a function `removeDuplicates` that takes an array of numbers as input and returns a new array with duplicate values removed.
// 1)using for loop,includes and push    we can also use 'reduce' and 'foreach' instead of for loop here

function removeDuplicates(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

const input = [1, 2, 2, 3, 4, 4, 5];
const output = removeDuplicates(input);
console.log(output); // [1, 2, 3, 4, 5]


//  Write a function `removeDuplicates` that takes an array of numbers as input and return that array with duplicate values removed wihtout taking new array.
// 2)
function removeDuplicates(arr){
   return arr.filter((val,index)=>{
    return arr.indexOf(val)==index
   })
}


// const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); // [1, 2, 3, 4, 5]

// 3)
// removing duplicates from an array using javascript inbuilt methods without taking an new array
 function removeDuplicates(arr){
  return [...new Set(arr)]
}


// const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); // [1, 2, 3, 4, 5]

//  4)using reduce
 function removeDuplicates(arr){
 return arr.reduce((acc,curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr)
    }
    return acc
 },[])
}



// const input = [1, 2, 2, 3, 4, 4, 5];
// const output = removeDuplicates(input);
// console.log(output); // [1, 2, 3, 4, 5]