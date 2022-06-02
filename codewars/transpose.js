function transpose(matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const res = Array.from({length: cols}, () => [])

  for (const row of matrix) {
    for (let i = 0; i < row.length; i++) {
      res[i].push(row[i])
    }
  }
  return res
}

function transposeUsingMap(matrix) {
  return matrix[0].map((_, i) => {
    return matrix.map((_, j) => {
      return matrix[j][i]
    })
  })
}

console.log(transpose([[1, 2, 3], [4, 5, 6]]))
console.log(transpose([[1, 4], [2, 5], [3, 6]]))
console.log(transpose([[1]]))

console.log(transposeUsingMap([[1, 2, 3], [4, 5, 6]]))
console.log(transposeUsingMap([[1, 4], [2, 5], [3, 6]]))
console.log(transposeUsingMap([[1]]))
