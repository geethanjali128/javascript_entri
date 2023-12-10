const numbers=[1,2,3,4,5]
let count=0
 numbers.forEach(myFunction)
 
 function myFunction(value,index,array){
    console.log(value)
    count+=value

 }
 console.log(count)

 const arr=[12,13,14,15]
 let total=0
 arr.forEach(function(value){
    console.log(value)
    total+=value

 })
 console.log(total)

//  map()
const output=numbers.map(function(val){
   return val*2
})
console.log(output)

const result=numbers.map(val=>  val*3)
console.log(result)
