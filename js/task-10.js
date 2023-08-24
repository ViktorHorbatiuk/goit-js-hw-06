const buttonOfCreate = document.querySelector("[data-create]");
const buttonOfDestroy = document.querySelector("[data-destroy]");
const boxesInContainer = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesInContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesInContainer.innerHTML = "";
}

buttonOfCreate.addEventListener("click", function () {
  const amount = document.querySelector("input").value;
  createBoxes(amount);
});

buttonOfDestroy.addEventListener("click", destroyBoxes);
