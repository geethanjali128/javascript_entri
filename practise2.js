const students=["rahul","rohit","mahi","rithik"]
students[0]="sruthi"
students[4]=25
students[1]=""
console.log(students)
console.log(students[2])
console.log(students[2][2])
students.push("nishi","rekha")
console.log(students)
students.pop()
console.log(students)
students.unshift("anjali")
console.log(students)
students.shift()
console.log(students)


const roll=[]

roll.push(56,23,45,78,95,35)
roll.pop()
roll.shift()
roll[0]=9
console.log(roll)

let name="geethanajlai karra"
let text=name.split(" ")
console.log(text)