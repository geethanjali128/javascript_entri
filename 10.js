// **10. Reverse an Array:**
// Write a program to reverse the elements of an array using a `for` loop.

const inputArray = [1, 2, 3, 4, 5];
const reverseArr=[]
for(let i=inputArray.length-1;i>=0;i--){
    reverseArr.push(inputArray[i])
}
console.log(reverseArr)