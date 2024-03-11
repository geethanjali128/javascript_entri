// 8. Write a function `countWords` that takes a string as input and returns the number of words in the string.


function countWords(str){
    // return str.split(" ").length
    // (or)
    // return str.match(/\S+/g).length
     // (or)
     return str.split(/\s+/g).length

}

  const input = "This is a sample sentence.";
   const output = countWords(input);
   console.log(output); // 5
