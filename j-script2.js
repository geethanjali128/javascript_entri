// toUpperCase
let text="morning"
console.log(text.toUpperCase())

// toLowerCase()
text="MORNING"
console.log(text.toLowerCase())

// concat()
let a="hello"
let b="world"
let c=a.concat(" ",b)
let d=a+" "+b
console.log(c)
console.log(d)

// trim()
let text1="   good morning   "
console.log(text1)
console.log(text1.trim())

// trimStart()
console.log(text1.trimStart())

// tirmEnd()
console.log(text1.trimEnd())

// padStart()
let data="25"
console.log(data.padStart(5,"#"))

// padEnd()
console.log(data.padEnd(5,"#"))

// charAt()
let x="geethanjali"
console.log(x.charAt(3))

// split()-converting a sting into an array

let y="karra geethanjali"
let z=y.split(" ")
console.log(z)

let input="car,bike"
console.log(input.split(","))

let input1="car and bike and auto"
console.log(input1.split("and"))
