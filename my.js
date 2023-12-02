class people{
    constructor(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    walk(){
        console.log("walking")
    }
    run(){
        console.log(abc.name+" is running")
    }
}


class students extends people{
    consturctor(name,age,gender,rollno){
        super(name,age,gender)
        this.rollno=rollno
       
    }
    read(){
        
        console.log("reading")
    }
}
let abc=new people("siri",21,"female")
console.log(abc)
abc.walk()
abc.run()
let abcd=new people("rohith","18","male")
abcd.walk()
let s1=new students("rohith",18,"male",37)
console.log(s1)
s1.run()
s1.read()
