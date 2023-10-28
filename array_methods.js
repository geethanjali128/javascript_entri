const numbers1=[45,4,9,16,25]
const numbers2=numbers1.map(myfunction)
function myfunction(value,index,array){
    console.log(value)
}
let numbers3=numbers1.forEach(myfunction)
 const array=[1,2,3,4,5]
  let sum=0
array.map((value)=>{
   sum+=value
 })
 console.log(sum)
// reduce()
 let text=array.reduce(myfunction)
 function myfunction(total,value,index,array){
  return total+value
 }
 console.log(text)

 let text1=array.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
 })
 console.log(text1)