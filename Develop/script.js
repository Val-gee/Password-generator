// Assignment Code
//defining variables for password criteria 
//var upperCase = ['a,b,c,d,e,f,g,h,].split(',')
//var lowerCase = ['a,b,c,d,e,f,g,h,].split(',')
//va has special characters
//ar has numbers
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
