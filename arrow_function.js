function add(a,b){
    return a%b
}
console.log(add(8,2))
console.log(add(15,4))


let func1=(string)=>{
    console.log(string.toUpperCase()) 
}
func1("anjali")

function func(string){
   console.log(string.slice(5,11))
   
}
func("karrageethanjali")
func("mukkusirisha")

// callback function
const add1=()=>{
    console.log(19+1)
}
const fname=(a,b,c)=>{
    console.log(a+b)
    c()
}
fname(5,6,add1)

// operators
let x=10
console.log(x)
// x=x+5
x+=5
console.log(x)
y=20
// console.log(x=y)
console.log(x==y)
console.log(x===y)
let z="20"
console.log(y==z)
// ==== checks an equal value and an equal type
console.log(y===z)
console.log(y!=z)
console.log(y!==z)

// if else else-if
let greeting=" "
let hour=19
if(hour<12){
    greeting="good morning"
}else if(12<hour<20){
    greeting="good evening"
}
else{
    greeting="good day"
}
console.log(greeting)
// if inside if
let n=110
if(n>10){
    console.log("anjali")
    if(n>100){
        console.log("rohith")
    }
}else{
    console.log("sirisha")
}

if(false){
    console.log("true")
}
// scope
let name="rakesh"
if(true){
    let name="suresh"
    console.log(name)
}
console.log(name)
 
let name1="siri"
if(true){
    name1="samu"
    console.log(name1)
}
console.log(name1)

var name2="mahi"
if(true){
    var name2="ritik"
    console.log(name2)
}
 console.log(name2)

 var name3="honey"
 if(true){
    name3="divya"
    console.log(name3)
 }
  console.log(name3)
   
  const name4="prasad"
  if(true){
    const name4="kumar"
      console.log(name4)
  }
   console.log(name4)
   const name5="navya"
  if(true){
    //  name5="kiran"
      console.log(name5)
  }
   console.log(name5)

//    schedullers functions
function abc(){
    console.log("setInterval")
}
let abc1=setInterval(abc,1000)
function abc2(){
    clearInterval(abc1)
}
let abc3=setTimeout(abc2,3000)

let count=1
let myTimer=setInterval(function(){
    console.log(count++)
    if(count===10){
        clearInterval(myTimer)
    }
},1000)

function time(){
    console.log("hello")
}
let timeOUT=setTimeout(time,3000)
// clearTimeout(timeOUT)

