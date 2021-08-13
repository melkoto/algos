function transpose(matrix: number[][]): number[][] {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let newArr = Array.from(Array(cols), () => new Array(rows));

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[0].length; j++) {
      newArr[i][j] = matrix[j][i];
    }
  }

  return newArr;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
