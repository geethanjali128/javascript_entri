let data="this is a car"
console.log(data.slice(0))
let ex=data.slice(4)
console.log(ex)
let ex1=data.slice(4,9)
console.log(ex1)
let part=ex.slice(6)
console.log(part)
console.log(data.length)
let part1=data.slice(-5)
console.log(part1)
console.log(data.slice(data.length -3) )
let part2=data.slice(data.length -8,-6)
console.log(part2)
let part3=data.slice(-5,-4)
console.log(part3)
let part4=data.substr(4,9)
console.log(part4)
let data1=data.replace("car","bike")
console.log(data1)
data="this is a car, car"
let data2=data.replace("car","bike")
console.log(data2)
let data3=data.replace(/cAr/i,"bike")
console.log(data3)
let data4=data.replace(/car/g,"bike")
console.log(data4)
let data5=data.replace(/cAr/ig,"bike")
console.log(data5)
let data6=data.replaceAll("car","bike")
console.log(data6.toUpperCase())
let text=data.slice(0,7)
let text1=" my car."
let text2=text.concat(text1)
console.log(text2)
let a="    geethanjalikarra@gmail.com   "
let a1=a.trim()
console.log(a1)
let a2=a.trimStart()
console.log(a2)
let a3=a.trimEnd()
console.log(a3)
let b="geethanjali"
let mail=b.padStart(15,"*")
let mail1=b.padEnd(15,"*")
console.log(mail)
console.log(mail1)
let mail3=mail.padEnd(19,"*")
console.log(mail3)
a="geethanjalikarra@gmail.com"
let newa=a.slice(0,3).padEnd(16,"*")
let newa1=a.slice(a.length -10)
let email=newa.concat(newa1)
console.log(email)
console.log(a.length)

