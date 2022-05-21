function regexColorizer(pattern) {
  let regexBrackets = {
    '[': ']',
    '(': ')',
    '{': '}'
  };
  const stack = [];

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];

    if (char in regexBrackets) {
      stack.push(char, i);
    }
    else if (char === regexBrackets[stack[stack.length - 2]]) {
      stack.pop()
      stack.pop()
    }
  }
  return stack
}


console.log(regexColorizer('(?<G1>[a-z]( ?[a-z]))[ \-]+(?<G2>([0-9] *[0-9]))[ ,]+(?<G3>[a-z0-9]( *[a-z0-9])) *(?<G4>([0-9]( *[0-9]){3}))'))
// console.log(['(', ')'].getLast())
// console.log(['('].getLast())
// console.log(['(', ')'].isEmpty())
// console.log([].isEmpty())
