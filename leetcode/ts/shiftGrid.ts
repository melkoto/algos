function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  let res = JSON.parse(JSON.stringify(grid));

  for (; k > 0; k--) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (j + 1 < n) {
          res[i][j + 1] = grid[i][j];
        }
        if (i + 1 < m) {
          res[i + 1][0] = grid[i][n - 1];
        }
        res[0][0] = grid[m - 1][n - 1];
      }
    }
    grid = JSON.parse(JSON.stringify(res));
  }

  return res;
}

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);

console.log(
  shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4
  )
);

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    9
  )
);
