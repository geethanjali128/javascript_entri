let x
var y
 x=10
console.log(x)
var y=20
console.log(y)
const z=15
 const p=x+y
console.log(z)
console.log(p)
let name="geethanjali"
name='geethanjali'
name="geeth'anjali"
name='geeth"anjali'
name=`geeth"an'jali`
name="gee\"thanjali"
name='geeth\'anjali'
console.log(name)
console.log(typeof(name))
console.log(name.length)
let text="this is a car"
let text1=50
let text2="100"
let data=text+text1
console.log(data)
console.log(typeof(data))
let data1=text+text1+text2
console.log(data1)
console.log(typeof(data1))
 let part=text.slice(0,4)
 let part1=text.slice(5,7)
 console.log(part)
 console.log(part1)
 console.log(text.length)
 let part2=text.slice(-13)
 console.log(text.slice(-3))
 console.log(part2)
 console.log(text.slice(-8,-4))
 console.log(text.substring(8,9))
 console.log(text.substr(5,2))
  console.log(text.substr(5))
  let replace=text.replace("car","bike")
  console.log(replace)
  text="this is car,car and car."
  let replace1=text.replace(/car/g,"bike")
   console.log(replace1)
   let replace2=text.replace(/CAR/ig,"bike")
   console.log(replace2)
   console.log(text.replaceAll("car","bike"))
   let name1=(name.toUpperCase())
   console.log(name1)
   console.log(name1.toLowerCase())
   name="    geethanjali  "
   let trimming=name.trim()
   console.log(trimming)
   let trimming1=name.trimStart()
   console.log(trimming1)
   let trimming2=name.trimEnd()
   console.log(trimming2)
   name="geethanjali"
   let padding=name.padStart(13,"@")
   console.log(padding)
   let padding1=name.padEnd(13,"@")
    console.log(padding1)
    let slice=name.slice(0,3)
    let slice1=slice.padEnd(9,"*")
     let slice2=name.slice(-2)
    let result=slice1.concat(slice2)
    console.log(result)
    text="this is a car and car"
    console.log(text.indexOf("car"))
    console.log(text.lastIndexOf("car"))
    let output=text.split(" ")
    console.log(output)
    console.log(output[0])
    console.log(text+" "+"of mine")
    // alternate to above situation after ES6
    console.log(`${text} of mine`)