function isValidIP(str) {
  const nums = '([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])'
  const regex = new RegExp(`^${nums}\\.${nums}\\.${nums}\\.${nums}$`)
  return regex.test(str)
}

console.log(isValidIP("137.255.156.100"))
console.log(isValidIP('123.456.789.0'))
console.log(isValidIP('01.02.03.04'))
console.log(isValidIP('1e0.1e1.1e2.2e2'))
