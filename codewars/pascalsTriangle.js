function pascalsTriangle(n) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
  const res = [[1], [1, 1]]
  if (n === 1) return [1]
  if (n === 2) return [1, 1, 1]

  for (let i = 2; i < n; i++) {
    let temp = Array.from({length: i + 1}, () => 0) //?

    for (let j = 1; j < temp.length - 1; j++) {
      temp[j] = res[i - 1][j - 1] + res[i - 1][j]
    }
    temp[0] = 1
    temp[temp.length - 1] = 1
    res.push(temp)
  }

  return res.flat(Infinity)
}

// console.log(pascalsTriangle(1))
// console.log(pascalsTriangle(2))
console.log(pascalsTriangle(4))
// console.log(pascalsTriangle(5))
// console.log(pascalsTriangle(6))
