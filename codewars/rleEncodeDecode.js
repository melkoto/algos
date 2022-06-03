function encode(str) {
  let encodedStr = ''
  let count = 0

  for (let i = 0; i < str.length; i++) {
    count++
    if (i + 1 && str[i] !== str[i + 1]) {
      encodedStr += count + str[i]
      count = 0
    }
  }
  return encodedStr
}

function decode(str) {
  let decodedStr = ''
  let repeatStr = ''

  for (let i = 0; i < str.length; i++) {
    while (isNumber(str[i])) {
      repeatStr += str[i++]
    }
    decodedStr += str[i].repeat(+repeatStr)
    repeatStr = ''
  }
  return decodedStr.length ? decodedStr : str
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
