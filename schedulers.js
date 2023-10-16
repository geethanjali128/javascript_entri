function abc(){
    console.log("i am geethanjali")
}
console.log("hello")
setTimeout(abc,1000)
console.log("hii")
 
function abc1(){
    console.log("i am geetha")
}
// setInterval=prints callback function after every ms which we give inside time parameter
let interval=setInterval(abc1,1000)
console.log("namaste")
function abc2(){
    clearInterval(interval)
}
    setTimeout(abc2,1000)


