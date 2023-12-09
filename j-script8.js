let greeting=" "
let hour=22
if(hour<15){
    console.log("good day")
}else if(hour<20){
    console.log("good morning")
}
else{
    console.log("good evening")
}
console.log(greeting)

let x=50
let y=20
if(x>y){
     console.log("x is greater than y")
}
else{
    console.log("y is greater than x")
}

if(x>y){
    if(hour>20){
        console.log("hello")
    }
}
// ternary opearator
let n=55
n>10?n>50?console.log("n is greater than 50"):console.log("n is lessthan 50"):console.log("n is lessthan 10")
 let m=45
m>10?m>50?console.log("m is greater than 50"):console.log("m is lessthan 50"):console.log("m is lessthan 10")
let p=9
p>10?p>50?console.log("p is greater than 50"):console.log("p is lessthan 50"):console.log("p is lessthan 10")
let q=12
q<12?console.log("hello"):q>12?console.log("hii"):console.log("bye")

let r=17
r<12?r<9?console.log("coffee"):console.log("breakfast"):r<16?console.log("tea"):console.log("biscuit")