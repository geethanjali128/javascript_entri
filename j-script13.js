const words=['my',' ','name',' ','is',' ','geethanjali']
let result=words.reduce((acc,curr)=>{
    return acc+curr
},' ')
console.log(result)

const array=[[1,2],[3,4],[5,6]]
let result1=array.reduce((acc,curr)=>{
    return acc.concat(curr)
},[])
console.log(result1)

const color=['apple','pear','apple','pear','pear']
const output3=color.reduce((acc,curr)=>{
    acc[curr]=(acc[curr]||0)+1
    return acc
},{})
console.log(output3)