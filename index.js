document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded")
})

// Add text with letters swapped to DOM
const showConvertedText = (text) => {
  const convertedText = convertText(text);
  const p = document.querySelector("#converted-text");
  p.innerText = convertedText;
}

// Use helper methods to turn inputted text 
const convertText = (text) => {
  const letters = text.split("");
  const newLetters = swapCases(letters);
  const newString = newLetters.join("");
  return newString;
}

const swapCases = (letters) => {
  // flip cases of chars as applicable
}