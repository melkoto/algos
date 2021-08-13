// Решение https://www.youtube.com/watch?v=GsUmfQHbn-E
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const phoneNumbers = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  if (digits.length === 0) return []; // !digits.length

  let prevCombinations = [''];

  for (let i = 0; i < digits.length; i++) {
    let newCombinations = [];

    for (let j = 0; j < prevCombinations.length; j++) {
      for (let letter of phoneNumbers[digits[i]]) {
        newCombinations.push(prevCombinations[j].concat(letter));
      }
    }

    if (i === digits.length - 1) return newCombinations;
    prevCombinations = newCombinations;
  }
};

letterCombinations('23');
