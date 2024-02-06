// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop

// function fibonacci(n){
//     let first=0
//     let second=1
//     let sum
//     for(let i=2;i<n;i++){
//         sum=first+second
//         first=second
//         second=sum
//     }
//  return sum
// }
// console.log(fibonacci(7))


function fibonacci(n){
    let arr=[0,1]
    for(let i=2;i<n;i++){
      arr[i]=arr[i-1]+arr[i-2]
    }
 return arr
}
console.log(fibonacci(7))