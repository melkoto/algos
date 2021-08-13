function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i - 1][j - 1] !== matrix[i][j]) return false;
    }
  }
  return true;
}

console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);

console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
);
