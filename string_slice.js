let text="pen,pencil and marker"
let part=text.slice(3,11)
console.log(part)
let part2=text.slice(0,3)
console.log(part2)


let text1="html,css, javascript";
let part3=text1.slice(10,14)
console.log(part3)

//  negative parameter
let text2="html,css, javascript"
 let part4=text.slice(-10,-6)
let part5=text.slice(-15)
console.log(part4)
console.log(part5)

let phNo="12345671234567"
let data=phNo.slice(-4)
let data1=data.padStart(10,"*")
console.log(data1)

let email="rakeshkumarjavvadi@gmail.com"
let extract=email.slice(0,4).padEnd(18,"*")
let extract1=email.slice(-10)
let newEmail=extract+extract1
console.log(newEmail)
        













