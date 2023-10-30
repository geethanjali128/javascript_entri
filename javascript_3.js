// callback function= "we pass a function as a parameter to another function"
function a(){
    console.log("hello")
}
function b(a){
    console.log("hii")
    a()
     console.log("hii")
}
b(a)


function add(n1,n2,func){
    console.log(n1+n2)
    func()
}
function change(){
    console.log("good morning")
}
function change1(){
    console.log("bye")
}

add(2,3,change1)
add(2,3,change)

// anonymous function
function ele(){
    console.log("html")
    
}
ele()

// arrow function 
let about=()=>{
    return "good"
}
console.log(about())

const user=(number)=>{
    if(number%2===0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
user(77)

console.log("hello")
let fname="karra"
let lname="geethanjali"
// template literals
console.log(`${fname} ${lname}`)

//  array destructuring
const members=["siri","anjali","rohit"]
let [val1,val2,val3]=members
console.log(val1,val2,val3)

// object destructuring
let course={
    "topic1":"html",
    "topic2":"css",
    "topic3":"java",

}

console.log(course.topic1)
let{topic1,topic2,topic3}=course
console.log(topic1,topic2,topic3)