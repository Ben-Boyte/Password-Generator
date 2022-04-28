// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptLength = window.prompt ("Choose length of password (8-128 characters)")

      if (promptLength === "" || promptLength === null) {
        window.alert("You need to provide a valid entry! Please try again.");
        return writePassword();
      }
      
      if (promptLength > 8 || promptLength < 128) {
        window.alert("Success");
      }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
