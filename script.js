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
    var possbileCharacters = []

    if (alert2 === true && alert3 === true && alert4 === true && alert5 === true) {
      const random = Math.floor(Math.random() * lowerCase.length);
      const random1 = Math.floor(Math.random() * upperCase.length);
      const random2 = Math.floor(Math.random() * numbers.length);
      const random3 = Math.floor(Math.random() * specialCharacters.length);
      console.log(random, alert2[random])
      console.log(random, alert3[random1])
      console.log(random, alert4[random2])
      console.log(random, alert5[random3])
      console.log(possbileCharacters)
      possbileCharacters.push(lowerCase)
      possbileCharacters.push(upperCase)
      possbileCharacters.push(numbers)
      possbileCharacters.push(specialCharacters)
      

    }else if (alert2 === true && alert3 === true && alert4 === true && alert5 === false) { 
      const random = Math.floor(Math.random() * lowerCase.length);
      const random1 = Math.floor(Math.random() * upperCase.length);
      const random2 = Math.floor(Math.random() * numbers.length);
      console.log(random, alert2[random])
      console.log(random, alert3[random1])
      console.log(random, alert4[random2])
      possbileCharacters.push(lowerCase)
      possbileCharacters.push(upperCase)
      possbileCharacters.push(numbers)
     
      

    }else if (alert2 === true && alert3 === true && alert4 === false && alert5 === false) {
      const random = Math.floor(Math.random() * lowerCase.length);
      const random1 = Math.floor(Math.random() * upperCase.length);
      console.log(random, alert2[random])
      console.log(random, alert3[random1])
      possbileCharacters.push(lowerCase)
      possbileCharacters.push(upperCase)
     

    }else if (alert2 === true && alert3 === false && alert4 === false && alert5 === false) {
      const random = Math.floor(Math.random() * lowerCase.length);
      console.log(random, alert2[random])
      possbileCharacters.push(lowerCase)
     

    }else if (alert2 === false && alert3 === false && alert4 === false && alert5 === false) {
      alert("no options chosen")

    }else if (alert2 === true && alert3 === false && alert4 === true && alert5 === false) {
      const random = Math.floor(Math.random() * lowerCase.length);
      const random2 = Math.floor(Math.random() * numbers.length);
      console.log(random, alert2[random])
      console.log(random, alert4[random2])    
      possbileCharacters.push(lowerCase)
      possbileCharacters.push(numbers)      

    }else if (alert2 === false && alert3 === true && alert4 === false && alert5 === true) {      
      const random1 = Math.floor(Math.random() * upperCase.length);     
      const random3 = Math.floor(Math.random() * specialCharacters.length);     
      console.log(random, alert3[random1])     
      console.log(random, alert5[random3])
      possbileCharacters.push(upperCase)
      possbileCharacters.push(specialCharacters)
      

    }else if (alert2 === false && alert3 === false && alert4 === false && alert5 === true) {    
      const random3 = Math.floor(Math.random() * specialCharacters.length);
      console.log(random, alert5[random3])
      possbileCharacters.push(specialCharacters)
      

    }else if (alert2 === false && alert3 === false && alert4 === true && alert5 === true) {
      const random2 = Math.floor(Math.random() * numbers.length);
      const random3 = Math.floor(Math.random() * specialCharacters.length);
      console.log(random, alert4[random2])
      console.log(random, alert5[random3])
      possbileCharacters.push(numbers)
      possbileCharacters.push(specialCharacters)
      

    }else if (alert2 === false && alert3 === true && alert4 === true && alert5 === true) {
      const random1 = Math.floor(Math.random() * upperCase.length);
      const random2 = Math.floor(Math.random() * numbers.length);
      const random3 = Math.floor(Math.random() * specialCharacters.length);
      console.log(random, alert3[random1])
      console.log(random, alert4[random2])
      console.log(random, alert5[random3])
      possbileCharacters.push(upperCase)
      possbileCharacters.push(numbers)
      possbileCharacters.push(specialCharacters)
      
    }

  passwordText.value = possbileCharacters;
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

