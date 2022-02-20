function calcType(a, b, res) {
  let s = {
    addition: '+',
    subtraction: '-',
    multiplication: '*',
    division: '/'
  }

  for (let key in s) {
    if (eval(`${a} ${s[key]} ${b}`) === res)
      return key
  }
}

console.log(calcType(6,2,3))