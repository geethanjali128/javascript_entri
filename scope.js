let x="rakesh"
if(true){
    console.log(x)
}
console.log(x)

let y="rakesh"
if(false){
    console.log(y)
}
console.log(y)

// var  scope:no
var name="ramesh"
if(true){
    var name="rakesh"
    console.log(name)
}
console.log(name)
var text="geethanjali"
if(true){
    text="rohith"
    console.log(text)
}
console.log(text)

// let scope:yes
let myname="sirisha"
if(true){
    let myname="meghana"
    console.log(myname)
}
console.log(myname)
let uname="kampa"
if(true){
    uname="karra"
    console.log(uname)
}
console.log(uname)

// const scope:yes
const a="prasad"
if(true){
    const a="kumar"
    console.log(a)
}
console.log(a)
const b="vinni"
if(true){
    b="bunny"
    console.log(b)
}
console.log(b)