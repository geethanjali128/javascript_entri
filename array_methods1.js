const names=["kumar","kiran","kishore","karan","kusuma"]
console.log(names)
console.log(names.indexOf("kiran"))

console.log(names[0])
console.log(names[1][0])
let element=names[4]
console.log(element)
names[1]=" "
console.log(names)
names[1]="kiran"
console.log(names)
names[5]="krishna"
console.log(names)
names[3]="kamala"
console.log(names)
console.log(names[names.length -1])
// array methods
const members=["mahi","ritik","somu","siri"]
console.log(members.length)
members.push("soni")
console.log(members)
members.pop()
console.log(members)
members.unshift("anjali")
members.shift()
console.log(members)
// forEach()
const func=(value,index,array)=>{
    console.log(value)
    console.log(index)
}
members.forEach(func)

members.forEach(function(value){
    console.log(value)
})
// .concat()
let total=names.concat(members)
console.log(total)
// indexOf()
const ages=[23,24,25,34]
console.log(ages.indexOf(24,0))
console.log(ages.indexOf(24,24))
console.log(ages.indexOf(25,0))
// find()
const myfunction=(ele)=>{
    return ele>24
}
 let result=ages.find(myfunction)
 console.log(result)
// array destructuring after es6
const numbers=[1,2,3,4,5]
let[ele1,ele2,ele3,ele4,ele5]=numbers
console.log(ele1,ele2,ele3,ele4,ele5)
// string split()
let data="karra geethanjali"
let data1=data.split(" ")
console.log(data1)
// array join()
let data2=data1.join(" ")
console.log(data2)
// array splice()
let data3=numbers.splice(1,1)
console.log(data3)
console.log(numbers)
numbers.splice(1,0,2)
console.log(numbers)
// map()
const func1=(value)=>{
    console.log(value)
}
numbers.map(func1)

numbers.map((value)=>{
    console.log(value)
})
let sum=0
numbers.map((value)=>{
    sum+=value
    // console.log(sum)
})
console.log(sum)

// filter()
const func2=(value)=>{
   return value>3
}
 let output=numbers.filter(func2)
 console.log(output)

 let output1=numbers.filter((value)=>{
    return value>3
 })
 console.log(output1)

// reduce
const func3=(total,value)=>{
    return total+value
}
let add=numbers.reduce(func3)
console.log(add)

let add1=numbers.reduce((total,value)=>{
    return total+value
})
console.log(add1)

let add3=numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
},0)
console.log(add3)

let max=numbers.reduce((accumulator,currentvalue)=>{
    return accumulator>currentvalue?accumulator:currentvalue
},-Infinity)
console.log(max)

const numbers1=[5,8,2,12,6]
let max1=numbers1.reduce((accumulator,currentvalue)=>{
    return  accumulator>currentvalue?accumulator:currentvalue
},-Infinity)
console.log(max1)

let min=numbers1.reduce((accumulator,currentvalue)=>{
    return  accumulator<currentvalue?accumulator:currentvalue
},Infinity)
console.log(min)
// concatenating ana rray of strings
const words=["Hello"," ","World","!"]
let sentence=words.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
},"")
console.log(sentence)

// flattering an array of arrays
const arrays=[[1,2],[3,4],[5,6]]
const flattened=arrays.reduce((accumulator,currentvalue)=>{
   
    return accumulator.concat(currentvalue)
    
},[])
console.log(flattened)

const colors=["red","blue","green","red","blue","red"]
const frequency=colors.reduce((accumulator,currentvalue)=>{
    accumulator[currentvalue]=(accumulator[currentvalue]||0)+1
    return accumulator
},{})
console.log(frequency)