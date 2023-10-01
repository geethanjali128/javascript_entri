// with "let" keyword , we cannot redeclare variables 
let x=5
console.log(x)
// let x=8
// console.log(x)

// with "let" keyword , we can reassign variables
let y=12
console.log(y)
y=15
console.log(y)

//  with "const" keyword ,we cannot redeclare  variables
const a=100
console.log(a)
// const a=150
// console.log(a)

// with "const" keyword ,we cannot reassign variables
const b="hello"
console.log(b)
// b="world"
// console.log(b)

// with "var" keyword we can redeclare and reassign variables
var z=15
console.log(z)
var z=16
console.log(z)

const fname="geethanjali"
const lname="karra"
console.log(fname.length)
console.log(typeof(fname))
// .concat()-to add values
console.log(fname.concat(lname))

let text="my name is geethanjali."
let data=text.slice(11,16)
let data1=text.slice(-7)
let data2=text.slice(-20,-16)
console.log(data+data1+data2)
console.log(text.substr(11,6))

let text1="please go to market and market,market."
let data3=text1.replace(/market/g,"school")
console.log(data3)
let data4=text1.replace(/MARKET/ig,"school")
console.log(data4)
let data5=text1.replace("market","school").toUpperCase()
console.log(data5)
let data6=text1.replaceAll("market","school")
console.log(data5)

let email="    karrageethanjali@gmail.com    "
const email1=email.trim()
const email2=email.trimStart()
const email3=email.trimEnd()
console.log(email)
console.log(email1)
console.log(email2)
console.log(email3)

let mname="sirisha"
let output=mname.padStart(10,"*")
let outPut=mname.padEnd(10,"*")
console.log(output)
console.log(outPut)

let ph="7896567879"
let data7=ph.slice(-3).padStart(ph.length,"*")
console.log(data7)
let data8=ph.slice(0,4).padEnd(ph.length,"*")
console.log(data8)
let data9=ph.slice(3,6).padStart(6,"*").padEnd(ph.length,"*")
console.log(data9)















