
const numbers = [45, 4, 9, 16, 25];

let txt=""
numbers.forEach(myFunction);


function myFunction(value, index, array) {
//   console.log(value)
//     console.log(index)
//       console.log(array)
txt=value
console.log(txt)

}

const arr=[1,6,8,4,2]
let sval=0
function add(value){
    console.log(value)
}
function avg(value){
    sval=sval+value
   
}
arr.forEach(add)
arr.forEach(avg)
 console.log(sval/5)

//  anonymous function=function without function name
arr.forEach(function(value){
    console.log(value)
})


