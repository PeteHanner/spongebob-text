document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#text-form")
  form.onsubmit = (e) => handleSubmit(e)
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
  const newLetters = alternateCases(letters);
  const newString = newLetters.join("");
  return newString;
}

// flip uppercase to lowercase and vice versa
// except ambiguous characters
// don't touch non-letters

const alternateCases = (chars) => {

}

const handleSubmit = (e) => {
  e.preventDefault()
  const formText = document.querySelector("#input").value
  showConvertedText(formText)
}