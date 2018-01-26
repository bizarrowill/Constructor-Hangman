// constructor function used to create Letter objects
function Letter(letter) {
  this.letter = letter;

  // creates property to hide the letter
  this.appear = false;

  // method to show a blank, _ , or letter
  this.letterRender = function() {
    if(this.letter == ' '){
      this.appear = true;
      return '  ';
      // if blank does not appear place an _ 
    }if(this.appear === false){
      return ' _ ';
      // otherwise display the letter 
    }else {
      return this.letter;
    }
  }
  
}


// export to use in word.js
module.exports = Letter;