const fontSizeAdjusting = document.getElementById("font-size-control");
const textAdjusting = document.getElementById("text");

fontSizeAdjusting.addEventListener("input", function () {
  const fontSize = fontSizeAdjusting.value + "px";
  textAdjusting.style.fontSize = fontSize;
});
