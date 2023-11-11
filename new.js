function createCount(){
    let count=0;
    return function(){
        count++
        return count;
    }
}
let counter1=createCount();
let counter2=createCount();
console.log(counter1())
console.log(counter2())