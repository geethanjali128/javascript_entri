const itemList=[['item:chocolate','price:20$'],['item:pen','price:10$'],['item:bottle','price:30$'],['item:book','price:35$']]
for(let i=0;i<itemList.length;i++){
    if(i>0){
        console.log('------------')
    }
    for(let j=0;j<itemList[i].length;j++){
        console.log(itemList[i][j])
    }
}

for(let i=0;i<5;i++){
    if(i>0){
        console.log('---------')
    }
    console.log(i)
    
    for(let j=0;j<5;j++){
        console.log(j)
    }
}

const object={
    name:'siri',
    age:13,
    class:8,
    gender:"female",
    rollNo:34
}

for(key in object){
    console.log(key+':'+object[key])
}

const nums=[2,3,6,6,4,5]

const result=nums.reduce((acc,curr)=>{
     acc>curr?acc:curr
    return curr
},0)
console.log(result)