// function timer(){
//     console.log("i am inseds timer function ")
// }
// console.log("helllo")
// // let timer1=setTimeout(timer,3000)
// console.log("hi")
// // clearTimeout(timer1)
// let timer2=setInterval(timer,1000)
// function clear(){
// clearInterval(timer2)
// }
// setTimeout(clear,2000)


// const ob1={a:1,b:2}
// const ob2={b:3,c:4}
// console.log({...ob1,...ob2})

// class
class person{
    constructor(name,age,gender){
        this.name=name,
        this.age=age,
        this.gender=gender
    }
    walk(){
        console.log("walking")
    }
}

// let person1=new person('siri',34,"female")
// let person2=new person('anjali',24,"female")

// console.log(person1.name)
// console.log(person2.gender)

// person1.walk()
// person2.walk()

class student extends person{
    constructor(name,age,gender,rollno){
        super(name,age,gender),
        this.rollno=rollno
    }
    read(){
        console.log(this.name+"is reading")
    }
}
let person1=new person('siri',34,"female")
let person2=new person('anjali',24,"female")

// let s1=new student()
// console.log(s1)
// s1.walk()
let s1=new student('siri',34,"female",23)
s1.read()
s1.walk()
person1.walk()
// person1.read()
console.log(s1.age)
console.log(person1.age)