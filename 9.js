// **9. Find Largest Element in an Array:**
// Write a program to find the largest element in an array using a `for` loop.

const numbers = [7, 2, 9, 1, 5];
let largestNo=numbers[0]
for(let i=0;i<=numbers.length;i++){
    if(largestNo<numbers[i]){
        largestNo=numbers[i]
    }
}
console.log(largestNo)
