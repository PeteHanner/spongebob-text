document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded")
})

const showConvertedText = (text) => {
  const convertedText = convertText(text);
  const p = document.querySelector("#converted-text");
  p.innerText = convertedText;
}

const convertText = (text) => {
  const letters = text.split("");
  const newLetters = swapCases(letters);
  const newString = joinString(newLetters);
  return newString;
}

const swapCases = (charArr) => {
  // flip cases of chars as applicable
}

const joinString = (charArr) => {
  // turn arr of chars back into string
}