let p=new Promise((resolve,reject)=>{
    let datacame=true
    if(datacame){
        resolve("promise done")
    }else{
        reject("promise not done")
    }
})
console.log(p)
p.then((data)=>{
    console.log(data)
    // console.log(p)
})
p.catch((errordata)=>{
    console.log(errordata)
})