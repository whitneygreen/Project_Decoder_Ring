// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


 // When encoding, it translates the letters i and j to 42.
//When decoding, it translates 42 to (i/j).
//It ignores capital letters. (For example, the results of A Message and a message should be the same.)
//It maintains spaces in the message, before and after encoding or decoding.



const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

   

const grid =
{
  '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
  '12': 'f', '22': 'g', '32': 'h', '42': ['i', 'j'], '52': 'k',
  '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
  '14': 'q', '24': 'r', '34': 's', '44': 't', '54': "u",
  '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z'
}
const gridValues = Object.values(grid)
const gridKeys = Object.keys(grid)

input = input.toLowerCase();











  return {
    polybius,
  };
}});

module.exports = { polybius: polybiusModule.polybius };
