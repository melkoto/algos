function islandPerimeter(grid: number[][]): number {
  let perimeter = 0,
    row: number,
    col: number,
    up: number,
    down: number,
    left: number,
    right: number;

  for (row = 0; row < grid.length; row++) {
    for (col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        if (row === 0) {
          up = 0;
        } else {
          up = grid[row - 1][col];
        }
        if (col === 0) {
          left = 0;
        } else {
          left = grid[row][col - 1];
        }
        if (row === grid.length - 1) {
          down = 0;
        } else {
          down = grid[row + 1][col];
        }
        if (col === grid[0].length - 1) {
          right = 0;
        } else {
          right = grid[row][col + 1];
        }

        perimeter += 4 - (up + down + right + left);
      }
    }
  }
  return perimeter;
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
