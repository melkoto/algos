function nonConstructibleChange(coins) {
  coins.sort((a,b) => a - b)
  let res = 0

  for (const coin of coins) {
    if (coin > res + 1) {
      return res + 1
    }
    res += coin
  }
  return res + 1
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
