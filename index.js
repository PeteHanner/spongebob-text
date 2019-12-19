document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded")
})

const convertText = (text) => {
  const letters = splitString(text);
  const newLetters = swapCases(letters);
  const newString = joinString(newLetters);
}