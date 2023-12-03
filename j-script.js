// string methods

// slice()
let text="i am geethanjali"
console.log(text.length)
let part=text.slice(0)
console.log(part)
let part1=text.slice(5)
console.log(part1)
let part2=text.slice(5,11)
console.log(part2)
let part3=text.slice(-11)
console.log(part3)
let part4=text.slice(-11,-6)
console.log(part4)

// substring()
let part5=text.substring(5,16)
console.log(part5)

// substr()
let part6=text.substr(5,6)
console.log(part6)

// replace()
text="please go to market"
console.log(text.replace("market","temple"))
console.log(text.replace(/Market/i,"temple"))
text="please go to market and market"
console.log(text.replace("market","temple"))
console.log(text.replace(/market/g,"temple"))
console.log(text.replace(/Market/ig,"temple"))

// replaceAll()
console.log(text.replaceAll("market","temple"))


