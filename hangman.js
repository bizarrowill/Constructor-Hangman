// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

//                                          NPM Packages, Global Variables
var inquirer = require('inquirer');
var userInput = (process.argv[2]);

//                                          Required Constructors

var word = require('./assets/word.js');
var letter = require('./assets/letter.js');




inquirer.prompt([ /* Pass your questions in here */

  {
    type: "input",
    message: "What is your name?",
    name: "username"
  },
  {
    type: "password",
    message: "Set a difficult password",
    name: "confirm",
    default: true
  }

])





.then(answers => {
  // Use user feedback for... whatever!!

});