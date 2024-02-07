// **6. Prime Number Check:**
// Write a program to check if a given number `n` is prime using a `for` loop.

// function isPrime(n){
//     if(n<2){
//         return `${n} is not prime`
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return `${n} is not prime`
//         }
//     }
//      return `${n} is prime`
// }
// console.log(isPrime(7))


function isPrime(n){
    let prime=true
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i===0){
            prime=false
        }
        break
    }
    return prime
}
console.log(isPrime(7))