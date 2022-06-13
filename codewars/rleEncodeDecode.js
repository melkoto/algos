function encode(str) {
  let encodedStr = ''
  let counter = 0

  for (let i = 0; i < str.length; i++) {
    counter++
    if (str[i] !== str[i + 1]) {
      encodedStr += counter + str[i]
      counter = 0
    }
  }
  return encodedStr
}

function decode(str) {
  let decodedStr = ''
  let repeatedChar = ''

  for (let i = 0; i < str.length; i++) {
    while (isNumber(str[i])) {
      repeatedChar += str[i++]
    }
    decodedStr += str[i].repeat(+repeatedChar)
    repeatedChar = ''
  }
  return decodedStr
}

function isNumber(char) {
  return !isNaN(char)
}


console.log(encode('AAA'))
console.log(encode('AB'))
console.log(encode('A'))
console.log(encode('AAAAAAAAAABBBCCCA'))

console.log(decode('3A3B1A'))
console.log(decode('1A2B'))
console.log(decode('10A'))
