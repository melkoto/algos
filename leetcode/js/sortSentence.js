/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
  let arr = Array.from({ length: s.split(" ").length }, () => "");
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      temp += s[i];
      // console.log(temp);
    } else if (!isNaN(s[i])) {
      arr[+s[i] - 1] = temp;
      temp = "";
      ++i;
    }
  }
  return arr.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
