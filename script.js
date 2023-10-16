function add(n1,n2,a){
    console.log(n1+n2)
    a()
}
function callbacktest(){
    console.log("hello")
}
function callbacktest1(){
    console.log("hii")
}
add(1,2, callbacktest1)