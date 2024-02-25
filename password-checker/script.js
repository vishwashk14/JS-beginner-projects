const input = document.getElementById("passCheck");
// checkers
var lowercase = document.getElementById("lower");
var uppercase = document.getElementById("upper");
var number = document.getElementById("num");
var specialChar = document.getElementById("schar");

// input.addEventListener("input", () => {
//   var inputValue = input.value;
//   console.log(inputValue);
// });

input.onkeyup = function () {
    var inputValue = input.value;
    console.log(inputValue);

    var lowercaseLetter = /[a-z]/g;
    if (inputValue.match(lowercaseLetter)) {
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }

    var uppercaseLetter = /[A-Z]/g;
    if (inputValue.match(uppercaseLetter)) {
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }

    var numberLetter = /[0-9]/g;
    if (inputValue.match(numberLetter)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    var specialCharLetter = /[.*+?!^#@${}()|[\]\\]/g;
    if (inputValue.match(specialCharLetter)) {
        specialChar.classList.remove("invalid");
        specialChar.classList.add("valid");
    } else {
        specialChar.classList.remove("valid");
        specialChar.classList.add("invalid");
    }
};
