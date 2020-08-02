var generateBtn = document.querySelector("#generate");

function writePassword() {
    //var password = generatePassword();
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

    if (alert2 === true && alert3 === true && alert4 === true && alert5 === true) {

    }else if (alert2 === true && alert3 === true && alert4 === true && alert5 === false) { 

    }else if (alert2 === true && alert3 === true && alert4 === false && alert5 === false) {

    }else if (alert2 === true && alert3 === false && alert4 === false && alert5 === false) {
        
    }

    }

    console.log(alert1)
    console.log(alert2)

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

