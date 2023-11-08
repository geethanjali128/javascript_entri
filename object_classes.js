const person={
    firstName:"Geethanjali",
    lastName:"Karra",
    age1:20,
    gender1:"female",
    function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(person.age1)
console.log(person.firstName)
console.log(person.function())
// object destructuring after ES6
let{firstName,lastName,age1,gender1}=person
console.log(firstName,lastName,age1,gender1)

// classes
class person1{
    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    run(){
        console.log("running")
    }
    Walk(){
        console.log("walking")
    }
}
let data=new person1("rohith",18,"male")
console.log(data.name)
console.log(data)
let data1=new person1("siri","22","female")
console.log(data1.name)
data.run()
data1.run()
class student extends person1{
    constructor(name,age,gender,rollNo){
        super(name,age,gender)
        this.rollNO=rollNo
    }
    read(){
        console.log("reading")
    }
    write(){
        console.log("writing")
    }
}
let data3=new student("siri",22,"female",35)
console.log(data3.rollNO)
data3.read()
data3.run()
// data.read()




