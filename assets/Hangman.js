// load packages and local game assets

var inquirer = require("inquirer");
var chalk = require("chalk");
var Word = require("./Word");
var words = require("./words");

// The Game constructor is responsible for keeping score and controlling the game
function Game() {
  // Save a reference for `this` in `self` as `this` will change inside of inquirer
  var self = this;
  // Sets the guesses to 10 and gets the next word
  this.play = function() {
    this.guessesLeft = 10;
    this.nextWord();
  };
  // Creates a new Word object using a random word from the array, asks the user for their guess
  this.nextWord = function() {
    var randWord = words[Math.floor(Math.random() * words.length)];
    this.currentWord = new Word(randWord);
    console.log('\n' + this.currentWord + '\n');
    this.makeGuess();
  };
  // Uses inquirer to prompt the user for their guess
  this.makeGuess = function() {
    this.askForLetter().then(function() {
      // If the user has no guesses remaining after this guess, display word, and ask if they want to play again
      if (self.guessesLeft < 1) {
        console.log(
          "No guesses left! Word was: \"" + self.currentWord.getSolution() + "\"\n"
        );
        self.askToPlayAgain();
        // If the user guessed all letters of the current word corrently, reset guessesLeft to 10 and play again
      }
      else if (self.currentWord.guessedCorrectly()) {
        console.log("You got it right! Next word!");
        self.guessesLeft = 10;
        self.nextWord();
        // Otherwise prompt the user to guess the next letter
      }
      else {
        self.makeGuess();
      }
    });
  };
  // Asks the user if they want to play again if guessesLeft = 0
  this.askToPlayAgain = function() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Play Again?"
        }
      ])
      .then(function(val) {
        // If the user says yes to another game, play again, or quit
        if (val.choice) {
          self.play();
        }
        else {
          self.quit();
        }
      });
  };
  // Prompts the user for a letter
  this.askForLetter = function() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Guess a letter!",
          validate: function(val) {
            // ensures guess is a letter
            return /[a-z1-9]/gi.test(val);
          }
        }
      ])
      .then(function(val) {
        // If the user's guess is in the current word, log it
        var didGuessCorrectly = self.currentWord.guessLetter(val.choice);
        if (didGuessCorrectly) {
          console.log(chalk.green("\nCORRECT!!!\n"));
          // Otherwise -1 `guessesLeft`, and display guesses left
        }
        else {
          self.guessesLeft--;
          console.log(chalk.red("\nINCORRECT!!!\n"));
          console.log(self.guessesLeft + " guesses remaining!!!\n");
        }
      });
  };
  // Logs goodbye and exits game
  this.quit = function() {
    console.log("\nGoodbye!");
    process.exit(0);
  };
}
module.exports = Game;