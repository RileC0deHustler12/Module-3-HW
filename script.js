// Assignment code here
var letters1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var letters2 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = [1,2,3,4,5,6,7,8,9]
var symbols = ['!','@','#','$','%','^','&','*']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  //Generates password
  var password = generatePassword();
  //Aquires text from query selector
  var passwordText = document.querySelector("#password");
//Gives text the value of "password"
  passwordText.value = password;

}

function generatePassword() {
  //Array that keeps track of user's inputs
  var characterOptions = []
//Forces user to input number between 8 and 128
  let length = prompt("Please enter a number between 8 and 128", "")
  if (length  < 8 || length > 128) {
    alert("Please enter a number greater than 8 and less than 128.")
    return "Password"
  }
// Pushes "letters1" into the character options according to user's inputs
  if (confirm("Add lowercase letters?")) {
    characterOptions.push(letters1);
  }
  console.log(characterOptions.length)
// Pushes "letters2" into the character options according to user's inputs
  if (confirm("Add uppercase letters?")){
    characterOptions.push(letters2);
  }
console.log(characterOptions.length)
// Pushes "numbers" into the character options according to user's inputs
if (confirm("Add numbers?")){
  characterOptions.push(numbers);
}
console.log(characterOptions.length)
// Pushes "symbols" into the character options according to user's inputs
if (confirm("Add symbols?")){
  characterOptions.push(symbols);
}
console.log(characterOptions.length)
//Makes sure at least one character type is validated
if (characterOptions.length === 0) {
  alert("Please pick atleast one option")
} else {
   alert("Thank you, here's your new password")
   var output = ""
   for(var index = 0; index < length; index ++){
    var optionNumber = getRndInteger(0,characterOptions.length)
    var characterNumber = getRndInteger(0,characterOptions[optionNumber].length)
    output += characterOptions[optionNumber][characterNumber]
   }
   return(output)
}

}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




