const input = document.getElementById("qr-input");
const button = document.getElementById("qr-button");
const img = document.getElementById("qr-image");

// console.log(img,button,input);

button.addEventListener("click", () => {
  const qrValue = input.value;
  console.log(qrValue);

  if (!qrValue) {
    alert("test");
    return;
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  }
});
