/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let lens = [];
  let output = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      lens.push(i);
    }
    if (i === s.length - 1) lens.push(i + 1);
  }

  let updatedIndex = 0;

  for (let i = 0; i < lens.length; i++) {
    for (let j = lens[i] - 1; j >= updatedIndex; j--) {
      output += s[j];
      if (j === updatedIndex && i !== lens.length - 1) output += " ";
    }
    updatedIndex = lens[i] + 1;
  }
  return output;
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
