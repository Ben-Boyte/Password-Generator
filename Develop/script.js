

var generatePassword = function(promptLength, promptCaps, promptLow, promptSpcl, promptNum) {
  var result = "";
   var characters = []; 
      
    var promptLength = Number(window.prompt("Choose length of password (8-128 characters)"))

      if (promptLength === "" || promptLength === null) {
        window.alert("You need to provide a valid entry! Please try again.");
        return generatePassword();
      }
      
      if (promptLength < 8 || promptLength > 128) {
        window.alert("Denied");
        return generatePassword();
      }

  var promptCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        window.confirm("Would you like password to contain uppercase letters?")

      if (promptCaps) {
        characters.push(...promptCaps);
      }
      console.log(characters);
      

     var promptLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
      window.confirm("Would you like password to contain lowercase letters?")
      if (promptLow) {
        characters.push(...promptLow);
      }
      console.log(promptLow);

    var promptSpcl = ["!", "@", "#", "$", "%", "&", "*"];

    window.confirm("Would you like password to contain special characters?")

    if (promptSpcl) {
      characters.push(...promptSpcl);
    }
    console.log(promptSpcl);

    var promptNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    window.confirm("Would you like password to contain numbers?")

    if (promptNum) {
      characters.push(...promptNum);
    }
    console.log(promptNum);
  
  console.log(characters);

  for (let i = 0; i < promptLength; i++) {
    const random = Math.floor(Math.random() * characters.length);
    result += characters[random]
  }
  return result;
}

var generateBtn = document.querySelector("#generate");
      
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
