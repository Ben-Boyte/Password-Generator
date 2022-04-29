

function generatePassword() {
   var result = "";
    
   var characters = ""; 
      
    var promptLength = window.prompt("Choose length of password (8-128 characters)")

      if (promptLength === "" || promptLength === null) {
        window.alert("You need to provide a valid entry! Please try again.");
        return generatePassword();
      }
      

      if (promptLength < 8 || promptLength > 128) {
        window.alert("Denied");
        return generatePassword();
      }

  var promptCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        window.prompt("Would you like password to contain uppercase letters?")

      if (promptCaps === "" || promptCaps === null ) {
        window.alert("You need to provide a valid entry! Please try again.");
        return generatePassword();
      }

      if (promptCaps === "yes" || promptCaps === "YES") {
        characters += promptCaps;
      }
      if (promptCaps === "no" || promptCaps === "No") {
      window.alert("Denied");
     }

     var promptLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
      window.prompt("Would you like password to contain lowercase letters?")

     if (promptLow === "" || promptLow === null ) {
       window.alert("You need to provide a valid entry! Please try again.");
       return generatePassword();
     }

     if (promptLow === "yes" || promptLow === "YES") {
       characters += promptLow; 
     }
     if (promptLow === "no" || promptLow === "No") {
     window.alert("Denied");
    }

    var promptSpcl = ["!", "@", "#", "$", "%", "&", "*"];

    window.prompt("Would you like password to contain special characters?")

     if (promptSpcl === "" || promptSpcl === null ) {
       window.alert("You need to provide a valid entry! Please try again.");
       return generatePassword();
     }

     if (promptSpcl === "yes" || promptSpcl === "YES") {
       characters += promptSpcl;
     }
     if (promptSpcl === "no" || promptSpcl === "No") {
     window.alert("Denied");
    }

    var promptNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    window.prompt("Would you like password to contain numbers?")

     if (promptNum === "" || promptNum === null ) {
       window.alert("You need to provide a valid entry! Please try again.");
       return generatePassword();
     }

     if (promptNum === "yes" || promptNum === "YES") {
       characters += promptNum;
     }
     if (promptNum === "no" || promptNum === "No") {
     window.alert("Denied");
  
     for (var i = 0; i < promptLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    if (!promptCaps && !promptLow && !promptNum && !promptSpcl) {
      window.confirm("You must select at least one character type!")
      return generatePassword();
  }
return result;
}
return password;
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
