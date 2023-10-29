// 1)Write a JavaScript function to extract a specified number of characters from a string. 
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

// sol:
const truncate_string=(string,no)=>{
    return string.slice(0,no)
}
console.log(truncate_string("Robin Singh",4));

// 2)Write a JavaScript function to convert a string into abbreviated form. 
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

// sol:
const abbrev_name=(string)=>{
   let data=string.split(" ")
   return data[0]+" "+data[1][0]+"."


}
 console.log(abbrev_name("Robin Singh"));

//  3)Write a JavaScript function that hides email addresses to prevent unauthorized access. 
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

// sol:
const protect_email=(email)=>{
    let part=email.split("@")
   let part1=part[0].slice(0,5)
   return part1+"..."+"@"+part[1]
}
console.log(protect_email("robin_singh@example.com"));


// 4)Write a JavaScript function to capitalize the first letter of a string. 
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

// sol:
const capitalize=(string)=>{
    return string.slice(0,1).toUpperCase()+string.slice(1)
}
console.log(capitalize('js string exercises'));

// 5)Write a JavaScript function to uncapitalize the first character of a string. 
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

// sol:
const Uncapitalize=(string)=>{
    return string.slice(0,1).toLowerCase()+string.slice(1)
}
console.log(Uncapitalize('Js string exercises'));

// 6)Write a function truncateText that takes a string and a maximum length as input and returns a truncated version of the string if it exceeds the maximum length, adding "..." at the end.

const truncateText=(str,max)=>{
    if(str.length>max){
        return str.slice(0,max)+"..."
    }
    else{
        return str
    }

} 
// 7)console.log(truncateText("This is a long sentence.", 10));
//  // Output: "This is a..."
// console.log(truncateText("Short text.", 15)); 
// // Output: "Short text."
// sol:
console.log(truncateText("This is a long sentence.", 10));
console.log(truncateText("Short text.", 15)); 

// 8)Time of Day Greeting
// Write a function greetTimeOfDay that takes the current hour as input (in 24-hour format) and prints a greeting based on the time of day: "Good morning" for hours 6-11, "Good Afternoon" for hours 12-17, and "Good evening" for hours 18-23.

// sol:
const greetTimeOfDay=(hour)=>{
    if(hour>=6&&hour<=11){
        console.log("Good morning")
    }else if(hour<=12&&hour>=17){
        console.log( "Good Afternoon")
    }else{
         console.log("Good evening" )
    }
}
greetTimeOfDay(18)

// 9)Leap Year Check
// Write a function isLeapYear that takes a year as input and prints "Leap year" if the year is divisible by 4 and not divisible by 100, or if it's divisible by 400. Otherwise, print "Not a leap year."

// sol:
const isLeapYear=(year)=>{
    if(year%4==0&&year%100!=0||year%400==0){
        console.log("Leap year")
    }
    else{
        console.log("Not a Leap year")
    }
}
isLeapYear(2003)

// 10)Positive, Negative, or Zero
// Write a function positiveNegativeZero that takes a number as input and prints "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

// sol:
const positiveNegativeZero=(number)=>{
    if(number>0){
        console.log("Positive")
    }else if(number<0){
         console.log("Negative")
    }else{
        console.log("Zero")
    }

}
positiveNegativeZero(1)
