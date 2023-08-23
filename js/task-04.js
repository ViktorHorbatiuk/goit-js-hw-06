let counterValue = 0;
const valueOfElement = document.getElementById("value");
const decrementOfBtn = document.querySelector('[data-action="decrement"]');
const incrementOfBtn = document.querySelector('[data-action="increment"]');

const clickOfDecrement = (press) => {
  counterValue -= 1;
  valueOfElement.textContent = counterValue;
};

const clickOfIncrement = (press) => {
  counterValue += 1;
  valueOfElement.textContent = counterValue;
};

decrementOfBtn.addEventListener("click", clickOfDecrement);
incrementOfBtn.addEventListener("click", clickOfIncrement);
