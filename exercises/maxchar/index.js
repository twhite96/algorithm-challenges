// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Turn string into object
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // Create object from string
  // if property in object doesn't exist
  // set that property in the object to one
  // else increment the property's value by 1
  Array.from(str, i => {
    (!charMap[i]) ? charMap[i] = 1 : charMap[i]++;
  });

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
