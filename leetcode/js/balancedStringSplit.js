/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
  let res = 0;
  let r = 0;
  let l = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") r++;
    if (s[i] === "L") l++;
    if (r === l) res++;
  }
  return res;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLLLLRRRLR"));
console.log(balancedStringSplit("LLLLRRRR"));
console.log(balancedStringSplit("RLRRRLLRLL"));
