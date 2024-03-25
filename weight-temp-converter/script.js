const fhValue = document.getElementById("fahrenhit-value");
const celsiusValueElement = document.getElementById("celsius-value");
const convertBtn = document.getElementById("convert");

convertBtn.addEventListener("click", function () {
  if (!fhValue.value) {
    alert("Please enter a value");
  } else {
    const celsiusValue = ((fhValue.value - 32) * 5) / 9;
    celsiusValueElement.innerText = celsiusValue.toFixed(2);
  }
});
