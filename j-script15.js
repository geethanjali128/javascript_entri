const students={
    name:"siri",
    age:22,
    skills:['html','css','javascript'],
    summary:function(){
        console.log('she is a student')
    }
}
console.log(students)
console.log(students.name)
students['name']="rohith"
console.log(students.name)
console.log(students['skills'])
students.summary()

const person={
    firstName:"geethanjali",
    lastName:"karra",
    age:20,
    data:function(){
        return this.firstName+" "+this.lastName
    }
}
console.log(person.data())
console.log(person["age"])
console.log(person.firstName)