const arr=[1,2,3,4,5]
function greaterThan(val){
    return val>2
}
let output=arr.filter(greaterThan)
console.log(output)
arr.filter((val)=>{
    console.log(val>3)
})
let output1=arr.filter(val=> val>3)
console.log(output1)

// reduce

const output2=arr.reduce((acc,curr)=>{
    return acc+curr
},0)
console.log(output2)


const output3=arr.reduce((acc,curr)=>{
    if(acc>curr){
        acc=curr
    }
    return curr
},0)
console.log(output3)

