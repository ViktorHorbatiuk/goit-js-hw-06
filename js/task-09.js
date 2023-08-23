const buttonOfColorChenge = document.querySelector(".change-color");
const colorOfText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonOfColorChenge.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorOfText.textContent = randomColor;
});
