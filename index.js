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

// flip uppercase to lowercase and vice versa
// except ambiguous characters
// don't touch non-letters

const swapCases = (chars) => {
  const swapped = []

  for (const char of chars) {
    switch (char) {
      case (char === 'l' || char === 'L'):
        swapped.push('L')
        break;
      case (char === 'i' || char === 'I'):
        swapped.push('i')
        break;
      case (char === char.toUpperCase()):
        swapped.push(char.toLowerCase());
        break;
      case (char === char.toLowerCase()):
        swapped.push(char.toUpperCase());
        break;
      default:
        swapped.push(char);
        break;
    }
  }

  return swapped;
}