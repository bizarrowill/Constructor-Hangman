// constructor function used to create programmers objects
function Word(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
  // creates the printInfo method and applies it to all programmer objects
  this.printInfo = function() {
    console.log(
      "Name: " +
        this.name +
        "\nPosition: " +
        this.position +
        "\nAge: " +
        this.age +
        "\nLanguages: " +
        this.language
    );
  };
}
