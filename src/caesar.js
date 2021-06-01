// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


  // you can add any code you want within this function scope
  

//input refers to the word/words that are input into the cipher to be encoded/decoded
//shift refers to a number that will change the input 
//encode is set to true. if encode is false, we will decode the input instead of encode it

 const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
  
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    input = input.toLowerCase().split("");
    let result = "";
  
    let cipher = (input, shift, alphabet) => {
      let charSwitch = input.forEach((letter) => {
        if (letter === " ") {
          result += letter;
          return result;
        }
        let currentIndex = alphabet.indexOf(letter);
        let newIndex = currentIndex + shift;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
  
        result += alphabet[newIndex];
      });
      return result;
    };
  
    return cipher(input, shift, alphabet);
  };
});
  
  module.exports = caesarModule.caesar;