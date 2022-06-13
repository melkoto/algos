function validBraces(braces){
  //TODO
  const stack = []
  const brackets = {
    "(": ')',
    "[": "]",
    "{": "}",
  }

  for (const char of braces) {
    if (stack.isEmpty()) stack.push(char)
    else if (char in brackets) {
      stack.push(char)
    }
    else if (brackets[stack.peek()] === char) {
      stack.pop()
    }
    else return false
  }

  return stack.length === 0
}

Array.prototype.isEmpty = function () {
  return this.length === 0
}

Array.prototype.peek = function () {
  if (this.length === 0) return undefined
  return this[this.length - 1]
}

console.log(validBraces("(){}[]"))
console.log(validBraces("([{}])"))
console.log(validBraces("[({})](]"))
