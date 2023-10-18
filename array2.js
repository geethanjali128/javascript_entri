const text=["geeth","anjali","somesh"]
console.log(`${text[0]}${text[1]}`)
console.log(`${text[0]} ${text[1]}`)
let p="sirisha"
console.log("hi"+" "+p+" "+"how are you?")
// instead of above line we use this teplate literals after ES6=> back ticks(`) is necessary here
console.log(`hii ${p} how are you?`)


const a=[1,2,3,4,5]
let b=a.indexOf(4,0)
console.log(b)
let c=a.indexOf(2,2)
console.log(c)

// array find method returns an element which is satisfying the condition fistly
function check(ele){
    return ele>3
}
let d=a.find(check)
console.log(d)
function check1(ele){
    return ele<5
}
let e=a.find(check1)
console.log(e)