// **1. Sum of Natural Numbers:**
// Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.


// 1)usinf for loop
let n=10
let sum=0
for(let i=1;i<=n;i++){
    sum+=i
}
console.log(sum)


// 2)
function sumOfNatural(n){
return n*(n+1)/2
}
console.log(sumOfNatural(10))
