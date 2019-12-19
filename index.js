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
  const swapped = []
  let nextCase = "lower"

  for (const char of chars) {
    if (char === 'l' || char === 'L') {
      swapped.push('L');
      nextCase = "lower"
    } else if (char === 'i' || char === 'I') {
      swapped.push('i');
      nextCase = "upper";
    } else if (char.match(/[a-z]/i)) {
      if (nextCase === "lower") {
        swapped.push(char.toLowerCase());
        nextCase = "upper";
      } else {
        swapped.push(char.toUpperCase());
        nextCase = "lower"
      }
    } else {
      swapped.push(char);
    }
  }

  return swapped
}



// switch (char) {
//   case (char === 'l' || char === 'L'):
//     swapped.push('L');
//     nextCase = "lower"
//     break;
//   case (char === 'i' || char === 'I'):
//     swapped.push('i');
//     nextCase = "upper";
//     break;
//   case ()
//       default:
//     swapped.push(char);
//     break;
// }




const handleSubmit = (e) => {
  e.preventDefault()
  const formText = document.querySelector("#input").value
  showConvertedText(formText)
}