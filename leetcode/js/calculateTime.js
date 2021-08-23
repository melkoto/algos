/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
const calculateTime = function (keyboard, word) {
  let lastInd = 0;
  let res = 0;

  for (let i = 0; i < word.length; i++) {
    let indOfCurrLet = keyboard.indexOf(word[i]);
    let diff = Math.abs(lastInd - indOfCurrLet);
    res += diff;
    lastInd = indOfCurrLet;
  }
  return res;
};

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"));
console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode"));
