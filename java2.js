// 11)Grade Calculator
// Write a function calculateGrade that takes a student's score as input and prints their corresponding grade: "A" for scores 90 and above, "B" for scores 80-89, "C" for scores 70-79, "D" for scores 60-69, and "F" for scores below 60.

// sol:

const calculateGrade=(score)=>{
    if(score>=90){
        console.log("A")
    }else if(score>=80&&score<90){
        console.log("B")
    }else if(score>=70&&score<80){
        console.log("C")
    }else if(score>=60&&score<70){
        console.log("C")
    }else{
         console.log("F")
    }
}
calculateGrade(50)

// 12)Even or Odd
// Write a function evenOrOdd that takes an integer as input and prints "Even" if the number is even, and "Odd" if the number is odd.

// sol:
const evenOrOdd=(integer)=>{
    if(integer%2===0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}
evenOrOdd(15)

// 13)Age Eligibility
// Write a function checkAge that takes an age as input. The function should return "Allowed" if the age is between 18 and 65 (inclusive), and "Not allowed" otherwise.

// sol:
const checkAge=(age)=>{
    if(age>=18&&age<=65){
        console.log("Allowed")
    }else{
        console.log("Not allowed")
    }
}
checkAge(17)

// 14)Ticket Pricing
// Write a function calculateTicketPrice that takes two parameters: a person's age and whether they have a student ID (true or false). If the person is under 18 or a student, they get a discount. If both conditions are met, return "Discounted price," otherwise return "Regular price.

// sol:
const calculateTicketPrice=(age,isStudent)=>{
    if(age<18||isStudent){
        console.log("Discounted price")
    }else{
        console.log("Regular price")
    }
}
calculateTicketPrice(15)

// 16)Color Selection
// Write a function selectColor that takes a color choice ("red", "blue", "green") and whether the color is available (true or false). If the color is available and the choice is "blue" or "green," return "Selected." If the choice is "red," return "Not available." For any other choice, return "Invalid choice."

// sol:
const selectColor=(isAvailable,color)=>{
   if(isAvailable){
    if(color==="blue"||color==="green"){
        console.log("Selected")
    }else if(color==="red"){
        console.log("Not available")
    }else{
        console.log("Inavalid choice")
    }
   }
}
selectColor(true,"red")

// 17) Adding and Removing Elements
// Create an array called `fruits` with initial values ["apple", "banana"]. Using the appropriate array methods, perform the following actions:
// - Add "orange" to the end of the array.
// - Remove the last element from the array.
// - Add "grape" to the beginning of the array.
// - Remove the first element from the array.

// Print the final array after each step.

// sol:
const fruits=["apple","banana"]
fruits.push("orange")
fruits.pop()
fruits.unshift("grape")
fruits.shift()
console.log(fruits)

// 18)Stack Operations
// Implement a stack using an array. Create a stack called `myStack` and perform the following operations:
// - Push the values 10, 20, and 30 onto the stack.
// - Pop the top element from the stack.
// - Push the value 40 onto the stack.

// Print the stack after each operation.

// sol:
let myStack=[]
myStack.push(10,20,30)
myStack.pop(30)
myStack.push(40)
console.log(myStack)

// 19)Queue Operations
// Implement a queue using an array. Create a queue called `myQueue` and perform the following operations:
// - Enqueue the values "a", "b", and "c" into the queue.
// - Dequeue an element from the queue.
// - Enqueue the value "d" into the queue.

// Print the queue after each operation.

const myQueue=[]
myQueue.push("a","b","c")
myQueue.shift()
myQueue.push("d")
console.log(myQueue)

// 20): Shopping List
// Create an empty array called `shoppingList`. Using the appropriate methods, add the items "eggs", "milk", "bread", and "vegetables" to the shopping list. Then, remove the "bread" from the list.

// Print the shopping list after each operation.

// sol:
let shoppingList=[]
shoppingList.unshift("eggs","milk","bread","vegetables")
// shoppingList.splice(2,1)
shoppingList.splice(shoppingList.indexOf("bread"),1)
console.log(shoppingList)



