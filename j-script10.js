function add(a,b,back){
    console.log(a+b)
    // back()
}
function callBackTest(){
    console.log("hello")
}
// add(2,3,callBackTest)

function product(a,b){
    console.log(a*b)
}
function calculator(val1,val2,operation){
    operation(val1,val2)
}
calculator(5,10,add)
calculator(5,10,product)

function fullName(val,back1){
    back1()
    console.log(`my name is ${val}`)
   
}
fullName("geethanjali",callBackTest)