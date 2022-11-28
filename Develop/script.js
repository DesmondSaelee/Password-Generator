// Added my variables at a global scope. The things I need to keep track of.
var generateBtn = document.querySelector("#generate");
var x = 8;
var y = 128;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()-_=+[{]}?/\|:;><,.";
var numbers = "0123456789";
var userInput = "";
var userPassword = "";

// Created variables within the function.
function generatePassword() {
  var userInput = "";
  var userPassword = "";
  var passwordprompt = prompt("Enter desired password length (between 8- 128 characters)");

// Added variables and if statements in the order I want them to appear and added the strings from the global scope variables.
  if ( (passwordprompt < x || passwordprompt > y) )  {
    alert ("Please input desired password length (between 8- 128 characters)");
    return;
  }

  var confirmLowerCase = confirm ("Include lowercase letters?")
  if (confirmLowerCase) {
    userInput = userInput.concat(lowercase)
  }

  var confirmUpperCase = confirm ("Include uppercase letters?")
  if (confirmUpperCase) {
    userInput = userInput.concat(uppercase)
  }

  var confirmNumber = confirm ("Include numbers?")
  if (confirmNumber) {
    userInput = userInput.concat(numbers)
  }

  var confirmSpecialCharacters = confirm ("Include special characters?")
  if (confirmSpecialCharacters) {
    userInput = userInput.concat(specialCharacters)
  }
// console logging the the string "user input = " and adding whatever length and other criteria the user has chosen.
  console.log("user input = " + userInput);

// Added for loop to grab random  from the userInput string.
  for (var i = 0; i < passwordprompt ; i++) {
    var randomInput = Math.floor(Math.random() * userInput.length);
    var random = userInput[randomInput];
    userPassword = userPassword.concat(random)
  }

  // return final result.
  return userPassword;
  

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

