const nameOfInput = document.getElementById("name-input");
const nameOfOutput = document.getElementById("name-output");

const valueOfInput = (event) => {
  nameOfOutput.textContent =
    nameOfInput.value !== "" ? event.currentTarget.value : "Anonymous;";
};

nameOfInput.addEventListener("input", valueOfInput);
