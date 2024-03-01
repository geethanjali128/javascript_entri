// **Question 2: Find the Maximum Number in an Array**

// Write a function `findMax` that takes an array of numbers as input and returns the maximum number from the array.

function findMax(arr){
    return arr.reduce((acc,curr)=>{
        if(curr>acc){
           acc=curr
        }
        return acc
    },-Infinity)
}


function findMax(arr){
    return arr.reduce((acc,curr)=>{
        if(curr>acc){
           acc=curr
        }
        return acc
    },0)
}



function findMax(arr){
    let maxNum=0
    for(let val of arr){
        if(maxNum<val){
            maxNum=val
        }
    }
    return maxNum
}




function findMax(input){
    return input.reduce((maxNum,num)=>
        Math.max(maxNum,num),-Infinity
    )
}
const input = [3, 7, 1, 9, 5];
const output = findMax(input);
console.log(output); // 9


function findMax(input){
    let maxNum=input[0]
    for(let i=1;i<=input.length;i++){
        if(input[i]>maxNum){
            maxNum=input[i]
        }
    }
    return maxNum

}


function findMax(input){
    let maxNum=0  //-Infinity
    for(let i=0;i<=input.length;i++){
        if(input[i]>maxNum){
            maxNum=input[i]
        }
    }
    return maxNum

}





