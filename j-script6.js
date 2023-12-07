// function
function sum(num1,num2){
    console.log("hello")
    // console.log(num1+num2)
    console.log(num1,num2)
}
// sum("hello","world")
sum(10)

function add(a,b){
    let x=a+b
    // return x
    console.log(x)
}
(add(4,8))

// geethanjalikarra@gmail.com
// geetha#########ra@gmail.com
function email(string){
    let part=string.split("@")
    // let part1=part[0].slice(0,6)
    // let part2=part1.padEnd(14,"#")
    // let part3=part[0].slice(-2)
    // let part4=part[1]
    // console.log(part2+part3+"@"+part4)
    let result=part[0].slice(0,6).padEnd(14,"#")+part[0].slice(-2)+"@"+part[1]
    console.log(result)
    
}
email("geethanjalikarra@gmail.com")