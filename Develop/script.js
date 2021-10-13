// // Assignment Code
var generateBtn = document.querySelector("#generate");
function writePassword() {
  var y = "y";
  var length = prompt(
    "Please enter the number of characters in your password (between 8 and 21)"
  );
  var lcinput = prompt("Do you want to include lower case letters? (y/n)");
  if (lcinput == y) {
    var lc = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  } else {
    var lc = [];
  }

  var ucinput = prompt("Do you want to include upper case letters? (y/n)");
  if (ucinput == y) {
    var uc = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  } else {
    var uc = [];
  }

  var numinput = prompt("Do you want to include numbers? (y/n)");
  if (numinput == y) {
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  } else {
    var num = [];
  }

  var scinput = prompt("Do you want to include special characters? (y/n)");
  if (scinput == y) {
    var sc = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  } else {
    var sc = [];
  }
  var chars = num.concat(sc, lc, uc);
  function generatePassword(arr, size) {
    var shuffled = arr.slice(0),
      i = arr.length,
      temp,
      index;
    while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
  }
  var password = generatePassword(chars, length);
  password = password.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}

generateBtn.addEventListener("click", writePassword);
