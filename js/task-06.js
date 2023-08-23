const validationOfInput = document.getElementById("validation-input");
const expectedLength = parseInt(validationOfInput.getAttribute("data-length"));

validationOfInput.addEventListener("blur", function () {
  const valueOfInput = validationOfInput.value.trim();
  const isValid = valueOfInput.length === expectedLength;

  if (isValid) {
    validationOfInput.classList.add("valid");
    validationOfInput.classList.remove("invalid");
  } else {
    validationOfInput.classList.add("invalid");
    validationOfInput.classList.remove("valid");
  }
});
