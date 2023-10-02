let fruits="banana apple mango"
const fruits1=fruits.split(" ")
console.log(fruits1)
const data=fruits1[0][0].toUpperCase()+fruits.slice(1)
console.log(data)
const fruits2=fruits1.join(" ")
console.log(fruits2)

let text="my name is anjali"
const array=text.split(" ")
console.log(array)
let newText=""
for(i=0;i<array.length;i++){
    newText+=array[i][0].toUpperCase()+array[i].slice(1)+" "
 
}
console.log(newText) 