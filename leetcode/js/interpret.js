/**
 * @param {string} command
 * @return {string}
 */
const interpret = function (command) {
  let res = "";

  for (let i = 0; i < command.length; i++) {
    let currChar = command[i];

    if (currChar === "G") {
      res += currChar;
    } else if (currChar === "(" && command[i + 1] !== ")") {
      res += "al";
    } else if (currChar === "(" && command[i + 1] === ")") {
      res += "o";
    }
  }
  return res;
};

console.log(interpret("G()(al)"));
console.log(interpret("G()()()()(al)"));
console.log(interpret("(al)G(al)()()G"));
