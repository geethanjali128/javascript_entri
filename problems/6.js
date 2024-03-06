// **6. Prime Number Check:**
// Write a program to check if a given number `n` is prime using a `for` loop.


// using function and for loop
// function checkPrime(n){
//     if(n<2){
//         return `${n} is not prime`
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return `${n} is not prime`
//         }
//     }
//     return `${n} is  prime`
// }

// console.log(checkPrime(13))


const n = 7;
let isPrime = true;
for (let i = 2; i <=Math.sqrt(n); i++) {  //The Math.sqrt() method returns the square root of a number.
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime)
