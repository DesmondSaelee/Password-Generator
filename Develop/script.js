// Assignment Code
var generateBtn = document.querySelector("#generate");
var x = 8;
var y = 128;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&?";
var numbers = "0123456789";
var string = "";
var passwordprompt = prompt("Enter desired password length (between 8- 128 characters)");
var lowercasePrompt = prompt("Include lowercase letters?");

function generatePassword() {
  var passwordprompt = prompt("Enter desired password length (between 8- 128 characters)");
  if ( (passwordprompt < x || passwordprompt > y) )  {
    prompt("Enter desired password length (between 8- 128 characters)");
  } else if (passwordprompt >= x && passwordprompt <= y )  ; {
  if ( confirm ("Include lowercase letters?") );
   if ( confirm ("Include uppercase letters?") );
    if ( confirm ("Include numbers?") );
     if (confirm ("Include special characters?") );
 };
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
// var passwordprompt = prompt("Enter desired password length (between 8- 128 characters)");
//   if (password < x || password > y) {
//   var passwordprompt = prompt("Enter desired password length (between 8- 128 characters)");
// } else { var characters = prompt("include lowercase letters?"); }
