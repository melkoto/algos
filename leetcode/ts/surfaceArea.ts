// function surfaceArea(grid: number[][]): number {
//   // если след. число больше, то само число лишнее
//   // если след. число меньше или равно, то след. число лишнее
//   let myGrid = grid.map((subArray) =>
//     subArray.map((num) => {
//       return num ? num * 4 + 2 : 0;
//     })
//   );
//
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       myGrid[i][j] = sub(grid, myGrid, i, j);
//     }
//   }
//
//   return myGrid
//     .map((subArray) => subArray.reduce((acc, cur) => acc + cur))
//     .reduce((acc, cur) => acc + cur);
// }
//
// function sub(
//   originalGrid: number[][],
//   myGrid: number[][],
//   i: number,
//   j: number
// ): number {
//   let top = 0,
//     bottom = 0,
//     left = 0,
//     right = 0;
//
//   if (typeof (originalGrid[i - 1] && originalGrid[i - 1][j]) !== "undefined") {
//     originalGrid[i - 1][j] <= originalGrid[i][j]
//       ? (top = originalGrid[i - 1][j])
//       : (top = originalGrid[i][j]);
//   }
//
//   if (typeof (originalGrid[i + 1] && originalGrid[i + 1][j]) !== "undefined") {
//     originalGrid[i + 1][j] <= originalGrid[i][j]
//       ? (bottom = originalGrid[i + 1][j])
//       : (bottom = originalGrid[i][j]);
//   }
//
//   if (typeof originalGrid[i][j - 1] !== "undefined") {
//     originalGrid[i][j - 1] <= originalGrid[i][j]
//       ? (left = originalGrid[i][j - 1])
//       : (left = originalGrid[i][j]);
//   }
//
//   if (typeof originalGrid[i][j + 1] !== "undefined") {
//     originalGrid[i][j + 1] <= originalGrid[i][j]
//       ? (right = originalGrid[i][j + 1])
//       : (right = originalGrid[i][j]);
//   }
//
//   return myGrid[i][j] - top - bottom - left - right;
// }

function surfaceArea(grid: number[][]): number {
  let res = 0,
    n = grid.length;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] > 0) res += grid[i][j] * 4 + 2;
      if (i > 0) res -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
      if (j > 0) res -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
    }
  }
  return res;
}

console.log(surfaceArea([[2]]));

console.log(
  surfaceArea([
    [1, 2],
    [3, 4],
  ])
);

console.log(
  surfaceArea([
    [1, 0],
    [0, 2],
  ])
);

console.log(
  surfaceArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  surfaceArea([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2],
  ])
);

console.log(
  surfaceArea([
    [1, 3, 2],
    [2, 1, 1],
    [2, 3, 1],
  ])
);
