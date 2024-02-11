// **8. Print Pattern:**
// Write a program to print a pattern of stars using a `for` loop.

const n=5
for(let i=1;i<=n;i++){
    let pattern=" "
    for(let j=1;j<=i;j++){
        pattern+="*"
        // console.log("--------------")
        // console.log(pattern)
    }
    console.log(pattern)
}