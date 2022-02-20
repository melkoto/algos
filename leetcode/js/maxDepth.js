/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  const stack = [];
  let depth = 0, tempDepth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      tempDepth++
      stack.push('(')
    } else if (s[i] === ')') {
      stack.pop()
      depth = Math.max(depth, tempDepth)
      tempDepth--;
    }

    if (stack.length === 0) {
      tempDepth = 0
    }
  }

  return depth
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
console.log(maxDepth("(1)+((2))+(((3)))"))
console.log(maxDepth("1+(2*3)/(2-1)"))
console.log(maxDepth("1"))