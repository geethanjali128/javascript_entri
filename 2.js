// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.

// function factorialOfNUmber(n){
//     let factorial=1
//     for(let i=1;i<=n;i++){
//         factorial*=i
//     }
//     return factorial
// }
// console.log(factorialOfNUmber(5))


function factorialOfNUmber(n){
    let factorial=1
    for(let i=n;i>0;i--){
        factorial*=i
    }
    return factorial
}
console.log(factorialOfNUmber(5))