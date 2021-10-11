/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
  let firstPart = s[0];
  let firstLetter = s[0];
  let ind = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== firstLetter) {
      firstPart += s[i];
    } else {
      ind = i;
      break;
    }
  }

  for (let i = ind; i < s.length; i += ind) {
    let sub = s.substring(i, i + ind);
    if (firstPart !== sub) return false;
  }
  return true;
};

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
// abababab
