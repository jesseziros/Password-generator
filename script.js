var generateBtn = document.querySelector("#generate");

function writePassword() {
    var passwordText = document.querySelector("#password");
    var alert1 = window.prompt("How long would you like your password to be? Must be between 8-128 characters");
    var alert2 = window.confirm("Do you want lower case letters?");
    var alert3 = window.confirm("Do you want upper case letters?");
    var alert4 = window.confirm("Do you want numbers?");
    var alert5 = window.confirm("Do you want special characters");
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var specialCharacters = ["*", "&", "/", "<", ">", "?", ";", "!", "#", "$"]
    var possibleCharacters = [];
    var password = "";

      if (alert2 === true) {
        possibleCharacters = possibleCharacters.concat(lowerCase)
        var randomNumber = Math.floor((Math.random() * lowerCase.length) + 0);
        password = password + lowerCase[randomNumber]
      }
      if (alert3 === true) {
        possibleCharacters = possibleCharacters.concat(upperCase)
        var randomNumber = Math.floor((Math.random() * upperCase.length) + 0);
        password = password + upperCase[randomNumber]
      }
      if (alert4 === true) {
        possibleCharacters = possibleCharacters.concat(numbers)
        var randomNumber = Math.floor((Math.random() * numbers.length) + 0);
        password = password + numbers[randomNumber]
      }
      if (alert5 === true) {
        possibleCharacters = possibleCharacters.concat(specialCharacters)
        var randomNumber = Math.floor((Math.random() * specialCharacters.length) + 0);
        password = password + specialCharacters[randomNumber]
      }
      console.log(password)
      console.log(alert1 - password.length)
      var passwordLength = password.length
      for (var i = 0; i < alert1 - passwordLength; i++) {
        var randomNumber = Math.floor((Math.random() * possibleCharacters.length) + 0);
        password = password + possibleCharacters[randomNumber]
        console.log(password)
      }    
    
    console.log(alert1)

  passwordText.value = password;
// 2. I need to have confirms assigned to ask user what they want in there password
//     -lower case 
//     -upper case
//     -special character
//     -numeric
//     -HAVE to have at least one special and numeric
//     -MUST be between 8-128 characters
}

generateBtn.addEventListener("click", writePassword);
    
    
// 3. assign generate password to box on page
// 1. i need to generate an alert when the generate password button is clicked

