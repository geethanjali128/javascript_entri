// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.

// The Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// ex:-0 1 1 2 3 5 8

const n=7
let first=0
let second=1
let result
for(let i=2;i<n;i++){
    result=first+second
   first=second
   second=result
   }
console.log(result)

// 2)
const n1=7
let arr=[0,1]
for(let i=2;i<n1;i++){
    arr[i]=arr[i-1]+arr[i-2]
}
console.log(arr)


