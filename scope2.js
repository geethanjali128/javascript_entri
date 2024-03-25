let c =100
function abc(){
    var a=10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
 
   abc()
   console.log(c)

let arr=[1,2,3,4,5]

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
    if(arr[i]===3){
        break
    }
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
    if(i===2){
        continue;
    }
}
   
let j=0
while(j<arr.length){
    console.log(arr[j])
    j++
}

let i=0
do{
    console.log(arr[i])
    i++
}while(i>arr.length)


const person={
    name:"entri",
    age:30
}

for(let key in person){
    console.log(person[key])
}