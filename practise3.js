let name="meghana karra"
console.log(name)
console.log(typeof(name))
let age=10
console.log(age)
console.log(typeof(age))
let a=name.concat(age)
console.log(a)
console.log(typeof(a))

// slice(),substring() and substr()
name="grey is my favourite color"
console.log(name)
 let ex=name.slice(0,4)
 let ex1=name.slice(11)
let ex2=name.slice(11,27)
let ex3=name.slice(-5)
let ex4=name.slice(name.length -5 )
let ex5=name.slice(-15,-6)
let b=name.substring(5)
let c=name.substr(11,9)
console.log(ex)
console.log(ex1)
console.log(ex2)
console.log(ex3)
console.log(ex4)
console.log(ex5)
console.log(b)
console.log(c)

// replace() and replaceAll()
 let newText=name.replace("grey","purple")
 let newText1=name.replace(/GREY/i,"purple")
 console.log(newText)
 console.log(newText1)
 let name1="grey is my favourite color-grey"
 let newText2=name1.replace(/grey/g,"purple")
 let newText3=name1.replace(/Grey/ig,"purple")
 console.log(newText2)
 console.log(newText3)
 let newText4=name1.replaceAll("grey","purple")
 console.log(newText4)

let text="geethanjali"
console.log(text.length)
let text1=text.toUpperCase()
let text2=text1.toLowerCase()
console.log(text1)
console.log(text2)
text="   geethanjali  "
let text3=text.trim()
let text4=text.trimStart()
let text5=text.trimEnd()
console.log(text3)
console.log(text4)
console.log(text5)
text="geethanjali"
let p=text.padStart(15,"*")
let q=text.padEnd(15,"*")
console.log(p)
console.log(q)
let r=text.slice(0,3).padEnd(9,"*")
let s=text.slice(text.length -2)
let result=r.concat(s)
console.log(result)