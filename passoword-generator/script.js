const passLength = document.getElementById("length-number");

let generatedPass = document.getElementById("pass-input");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generate = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const alphabet = [...Array(26)].map((_, i) =>
  String.fromCharCode("a".charCodeAt(0) + i)
);

const numbersValue = "1234567890";
const symbolsValue = "+-*/@!";
const uppercaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseValue = "abcdefghijklmnopqrstuvwxyz";

let password = "";
// console.log(lowercaseValue);

generate.addEventListener("click", function () {
  const checkedBox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  //   console.log(checkedBox);
  if (checkedBox.length === 0) {
    alert("Please select something");
  } else {
    let str = "";

    if (uppercase.checked) {
      str += uppercaseValue;
    }

    if (lowercase.checked) {
      str += lowercaseValue;
    }
    if (number.checked) {
      str += numbersValue;
    }
    if (symbols.checked) {
      str += symbolsValue;
    }
    // console.log(str);
    // console.log(str);

    // const sP = str[Math.floor(Math.random() * str.length)];
    // console.log(sP);
    for (var i = 0; i < passLength.value; i++) {
      const randomGeneratedPass = str[Math.floor(Math.random() * str.length)];
      password += randomGeneratedPass;
    }

    generatedPass.value = password;
  }
});
