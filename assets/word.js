//     require Letter file
var Letter = require("./letter.js");


// constructor function used to create Word objects
function Word(word) {

  // splits the word into array of letters
 this.letters = word.split("").map(function(char) {
   return new Letter(char);
 });

 
}
