// **1. Sum of Natural Numbers:**
// Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.


// function
// function sumOfNatuaralNumaber(n){
//     return n*(n+1)/2
// }
// console.log(sumOfNatuaralNumaber(5))

// using for loop
function sumOfNatuaralNumber(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i
    };
    return sum;
};
console.log(sumOfNatuaralNumber(5));
