function about(){
    console.log("bye")
}
console.log("hiii")
// below calls about function after 1000ms
setTimeout(about,1000)
// below calls about function after every 1000ms
 let a=setInterval(about,1000)
console.log("hello")
function clear(){
    clearInterval(a)
}
// below clears setInterval 
setTimeout(clear,1000)
// below calls function afters 50000ms
setTimeout(about,5000)


