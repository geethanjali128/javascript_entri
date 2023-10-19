let per_son={
    fname:"geethanjali",
    lname:"karra",
    age:20,
    gender:"female",
    fullName:function(){
        this.fname+" "+this.lname
    }
}
console.log(per_son)
console.log(per_son.fname)
console.log(per_son.lname)
console.log(per_son.fullName)

class person{
    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
      walk(){
        console.log(person1.name+" "+" is wlaking")
    }
    run(){
        console.log("running")
    }
}

class student extends person{
    constructor(name,age,gender,rollno){
        super(name,age,gender)
        this.rollno=rollno
    }
    read(){
        console.log("reading")
    }

}
let person1=new person("siri",21,"female")
console.log(person1)
console.log(person1.name)
let person2=new person("bunny",18,"male")
person1.walk()
person2.run()
// inheritance
 let s1=new student("siri",21,"male",45)
  s1.run()
  s1.read()
  console.log(s1)
  



