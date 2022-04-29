
//put this inside function
//var random = function(){}

function generatePassword() {
   
  var promptLength = window.prompt("Choose length of password (8-128 characters)")

      if (promptLength === "" || promptLength === null) {
        window.alert("You need to provide a valid entry! Please try again.");
        return generatePassword();
      }
      
      if (promptLength > 8 && promptLength < 128) {

        window.alert("Success");
      }

      if (promptLength < 8 || promptLength > 128) {
        window.alert("Denied");
        return generatePassword();
      }

  var promptCaps = window.prompt("Would you like password to contain uppercase letters?")

      if (promptCaps === "" || promptCaps === null ) {
        window.alert("You need to provide a valid entry! Please try again.");
        return generatePassword();
      }

      if (promptCaps === "yes" || promptCaps === "YES") {
        window.alert("Success");
      }
      if (promptCaps === "no" || promptCaps === "No") {
      window.alert("Denied");
      return generatePassword();
     }

  var promptLow = window.prompt("Would you like password to contain lowercase letters?")

     if (promptLow === "" || promptLow === null ) {
       window.alert("You need to provide a valid entry! Please try again.");
       return generatePassword();
     }

     if (promptLow === "yes" || promptLow === "YES") {
       window.alert("Success"); 
     }
     if (promptLow === "no" || promptLow === "No") {
     window.alert("Denied");
     return generatePassword();

    }

    var promptSpcl = window.prompt("Would you like password to contain special characters?")

     if (promptSpcl === "" || promptSpcl === null ) {
       window.alert("You need to provide a valid entry! Please try again.");
       return generatePassword();
     }

     if (promptSpcl === "yes" || promptSpcl === "YES") {
       window.alert("Success"); 
     }
     if (promptSpcl === "no" || promptSpcl === "No") {
     window.alert("Denied");
     return generatePassword();

    }
  
  }
    // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
      

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
