let firstName="geethanjali"
let lastName="karra"
let fullName=firstName.concat(lastName)
console.log(fullName)
console.log(fullName.toUpperCase())
console.log(fullName.length)
console.log(typeof(fullName))

let text="i'm from avanigadda."
let result=text.slice(0,3)
let result1=text.slice(9)
let result2=text.slice(4,8)
console.log(result)
console.log(result1)
console.log(result2)


let result3=text.slice(-11)
let result4=text.slice(-11,-6)
console.log(result3)
console.log(result4)


let text1=text.substr(4,4)
console.log(text1)

let data="i have a car,car and car."
let newData=data.replace("car","bike")
console.log(newData)
let data1=data.replace(/Car/i,"bike")
console.log(data1)
let data2=data.replace(/car/g,"bike")
console.log(data2)
let data3=data.replace(/CAR/ig,"bike")
console.log(data3)
let data4=data.replaceAll("car","bike")

let fName="geethanjali"
let lName="karra"
let myName="VINNY"
console.log(fName.toUpperCase())
let fullName1=fName.concat(lName).toUpperCase()
console.log(fullName1)
console.log(myName.toLowerCase())

const email="    karrageethanjali@gamail.com  "
console.log(email)
let newEmail=email.trim()
let mail=email.trimStart()
let mail1=email.trimEnd()
console.log(newEmail)
console.log(mail)
console.log(mail1)

let no="9787546347"
let output=no.padStart(15,"*")
console.log(output)
let output1=no.padEnd(15,"*")
console.log(output1)