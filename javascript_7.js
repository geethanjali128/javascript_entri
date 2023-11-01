let myname="geethanjali"
let surname="karra"
let fullname=myname+" "+surname
console.log(myname)
console.log(surname)
console.log(fullname)

let data="i love to eat chocolates"
console.log(data)
let data1=data.slice(0)
console.log(data1)
let data2=data.slice(2,6)
console.log(data2)
let data3=data.slice(0,6)
console.log(data3)
let data4=data.slice(10)
console.log(data4)
let data5=data.substring(0,1)
console.log(data5)
let data6=data.slice(-10)
console.log(data6)
let data7=data.slice(-14,-1)
console.log(data7)
let data8=data.substr(14,10)
console.log(data8)
let data9=data.replace("chocolates","icecreams")
console.log(data9)
let data10=data.replace(/CHocolates/i,"icecreams")
console.log(data10)
data="i love to eat chocolates,chocolates and chocolates."
let data11=data.replace("chocolates","icecreams")
console.log(data11)
let data12=data.replace(/chocolates/g,"icecreams")
console.log(data12)
let data13=data.replace(/Chocolates/ig,"icecreams")
console.log(data13)
let data14=data.replaceAll("chocolates","icecreams")
console.log(data14)

let data15=data.toUpperCase()

console.log(data15)
let data16=data15.toLowerCase()
console.log(data16)
data="i love to eat chocolates"
let data17=data.slice(-10).toUpperCase()
let data18=data.slice(0,14)
let data19=data18+data17
console.log(data19)

