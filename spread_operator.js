const array1=[1,2,3]
const array2=[4,5,6]
console.log(array1)
console.log(array2)
console.log(array1,array2)
console.log(...array1)
console.log(...array2)
console.log(...array1,...array2)
let newArray=[...array1,...array2]
console.log(newArray)
console.log(array1.concat(array2))

const ob1={a:1,b:2}
const ob2={b:3,c:4}
console.log(ob1,ob2)
console.log({...ob1,...ob2})
// console.log(...ob1,...ob2)

// function example(param1,param2,rest){
//     console.log(param1)
//     console.log(param2)
//     console.log(rest)
// }
// example(1,2,3,4,5)

// function example(param1,param2,...rest){
//     console.log(param1)
//     console.log(param2)
//     console.log(rest)
// }
// example(1,2,3,4,5)

function example(param1,param2,...rest){
    console.log(param1)
    console.log(param2)
    console.log(...rest)
}
example(1,2,3,4,5)

function sum(x,y,z,p){
    // console.log(x)
    // console.log(y)
    // console.log(z)
    // console.log(p)
    console.log(x,y,z,p)
}
let number=[1,2,3,4]
console.log(sum(...number))

function sum1(...numbers){
    let total=0
    for(const num of numbers){
        total+=num
    }
    return total
}
console.log(sum1(1,2,3,4,5,))
