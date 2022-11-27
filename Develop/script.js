// Added my variables. The things I need to keep track of.
var generateBtn = document.querySelector("#generate");
var x = 8;
var y = 128;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()-_=+[{]}?/\|:;><,.";
var numbers = "0123456789";
var userInput = "";
var userPassword = "";

// Created a function to prompt for user input, user confirmation, and to alert the user for the criteria needed to generate random password.
function generatePassword() {
  var userInput = "";
  var userPassword = "";
  var passwordprompt = prompt("Enter desired password length (between 8- 128 characters)");
  var confirmLowerCase = confirm ("Include lowercase letters?")

  if ( (passwordprompt < x || passwordprompt > y) )  {
    alert ("Please input desired password length (between 8- 128 characters)");
    return;
  }

  if (confirmLowerCase) {
    userInput = userInput.concat(lowercase)
  }

  




//    else if (passwordprompt >= x && passwordprompt <= y )  ; {
//   if ( confirm ("Include lowercase letters?") );
//    if ( confirm ("Include uppercase letters?") );
//     if ( confirm ("Include numbers?") );
//      if (confirm ("Include special characters?") );
//  };
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

}


// if (specialCharactersPrompt) {
//   string.concat(specialCharacters)
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

