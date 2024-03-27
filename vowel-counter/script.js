const submitBtn = document.getElementById("count");
const output = document.querySelector(".output");
console.log(output);
const textarea = document.querySelector("textarea");

submitBtn.addEventListener("click", function () {
  //   console.log(textarea.value);

  const textValue = textarea.value;
  let count = 0;
  for (let i = 0; i < textValue.length; i++) {
    if (
      textValue[i] == "a" ||
      textValue[i] == "i" ||
      textValue[i] == "o" ||
      textValue[i] == "u"
    ) {
      count++;
      console.log(count);
    }
    output.innerHTML = `there are total ${count} vowels`;
  }
});
