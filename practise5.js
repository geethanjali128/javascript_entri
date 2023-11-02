function add1(){
    console.log("this is geethanjai")
}
function add2(){
    console.log("i'm from Avanigadda")
}
function ex(a,b,abc){
    console.log(a+b)
    abc()
}
ex(3,4,add2)
ex(3,4,add1)

const p=[1,2,3,4,5]
p.push("10","15")
// anonymous function
p.forEach(function (value,index,array){
    console.log(value)
    console.log(index)
    console.log(array)

})
// function add3(value,index,array){
//     console.log(value)
//     console.log(index)
//     console.log(array)

// }

function change(){
    console.log("hello")
}
setTimeout(change,1000)
console.log("hiii")
function change1(){
    console.log("gd evening")
}

console.log("bye")
let a=setInterval(change1,1000)
function change2(){
    clearInterval(a)
}

setTimeout(change2,1000)

