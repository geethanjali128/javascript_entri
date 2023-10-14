// var ,let and const are functional scope
function sum(){
    var name="anjali"
    console.log(name)
}
sum()
// console.log(name)
// sum()
// 
function sum1(){
    let name1="geetha"
    console.log(name1)
}
sum1()
// console.log(name1)
// sum1()

function sum2(){
    const name2="karra"
    console.log(name2)
}
sum2()
console.log(name2)
sum2()