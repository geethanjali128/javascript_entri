// 8. Write a function `countWords` that takes a string as input and returns the number of words in the string.

function countWords(input){
// 1)using split()
    // return input.split(" ").length

    // 2)usign regEx \S and match()  note:match method returns an array
//   if input contains extra white spces = regular expression \S to match all non white space characters and adding + to \S like \S+ to take 1 or more charcters otherwise it splits on each character
// In a regular expression, the sequence "\S+" means to match one or more characters that are not white-space characters.

// match() method returns an array with that matched strings
//  return input.match(/\S+/g).length;

// 3)using regEx \s
// In a regular expression, the sequence "\s+" means to match one or more  white-space characters.
return input.split(/\s+/g).length;
   
}

   const input = "This is a sample sentence.";
   const output = countWords(input);
   console.log(output); // 5
