var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// 2. I need to have prompts assigned to ask user what they want in there password
//     -lower case 
//     -upper case
//     -special character
//     -numeric
//     -HAVE to have at least one special and numeric
//     -MUST be between 8-128 characters
}

generateBtn.addEventListener("click", writePassword);
// 1. i need to generate an alert when the generate password button is clicked



// 3. assign generate password to box on page

