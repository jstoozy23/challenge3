var generateBtn = document.querySelector("#generate");

const alloptions = ["abcdefghijklmnopqrstuvwxyz" , "ABCDEFGHIJKLMNOPQRSTUVWXYZ" , "0123456789" , "!@#$%^&*"];

var resultStr = '';
var passLength ;
var newpassword ="";

function numberselect(){
  newpassword = "";
  var entry1 = prompt("How many characters long would you like your Password? Please enter a number between 8 and 128", "")
  if (entry1 < 8 || entry1 > 129 || entry1 === ""){
    alert("Please enter the criteria correctly")
    numberselect()
 } else {
    passLength = entry1;
    alert("Please be sure to enter Y for at least 1 of the 4 character types. Thank you!")
    lowercase()
  }
};

function lowercase (){
  var entry2 = prompt("Do you want a lowercase letter?" , " (Y) yes or (N) no ")
     if (entry2 == "y"){
      resultStr = resultStr += alloptions[0];
      uppercase()
     } else if (entry2 == "n") {
        uppercase()
}  else {
    alert("Please enter a Y for yes or an N for no")
    lowercase()
  }
};

function uppercase (){
  var entry3 = prompt("Do you want an uppercase letter" , " (Y) yes or (N) no ")
  if (entry3 == "y"){
     resultStr = resultStr += alloptions[1];
      numeric()
   } else if (entry3 == "n") {
      numeric()
  }  else {
      alert("Please enter a Y for yes or an N for no")
      uppercase()
  }
};

function numeric (){
  var entry4 = prompt("Do you want an number" , " (Y) yes or (N) no ")
    if (entry4 == "y"){
      resultStr = resultStr += alloptions[2];
      special()
   } else if (entry4 == "n") {
      special()
  }  else {
      alert("Please enter a Y for yes or an N for no")
     numeric()
  }
};

function special (){
  var entry5 = prompt("Do you want an special character ie # , $ , % , &, etc." , " (Y) yes or (N) no ")
    if (entry5 == "y"){
      resultStr = resultStr += alloptions[3];
      cyclepassword()
   } else if (entry5 == "n") {
      cyclepassword()
  }  else {
      alert("Please enter a Y for yes or an N for no")
      special()
  }
};

function cyclepassword (){
    if (resultStr == ""){
      alert("Please be sure to enter Y for at least 1 of the 4 character types. Thank you!")
      lowercase()
  }  else {
    for (let i = 0; i < passLength; i++) {
    var scope = Math.floor(Math.random() * resultStr.length);
    newpassword += resultStr [scope]

  }}
} ;

function writePassword() {
 
  numberselect();
  var passwordText = document.querySelector("#password");
  passwordText.value = newpassword;

};

generateBtn.addEventListener("click", writePassword);