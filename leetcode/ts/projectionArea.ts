function projectionArea(grid: number[][]): number {
  let xy = 0;
  let yz = 0;
  let zx = Array.from(Array(grid[0].length), () => 0);

  grid.forEach((subArr) => {
    subArr.forEach((num) => {
      if (num) {
        xy += 1;
      }
    });
  });

  grid.forEach((subArray) => (yz += Math.max(...subArray)));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      zx[i] = Math.max(grid[j][i], zx[i]);
    }
  }

  return xy + yz + zx.reduce((acc, cur) => acc + cur);
}

console.log(
  projectionArea([
    [1, 2],
    [3, 4],
  ])
);

console.log(
  projectionArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  projectionArea([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2],
  ])
);

console.log(projectionArea([[2]]));

console.log(
  projectionArea([
    [1, 0],
    [0, 2],
  ])
);

console.log(
  projectionArea([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

// The problem asks us to transform the grid into a 3D graph.
// The list index of the grid represents x axis, the index of
// the integer within the list represents y axis, the integer
// itself represents z axis. For example, if the grid = [[1,2],[3,4]],
// it means there is 1 cube (z = 1) in the position of (x = 0, y = 0),
// 2 cubes (z = 2) compile in (x = 0, y = 1), 3 (z = 3) cubes compile
// in (x = 1, y = 0) and 4 cubes (z = 4) compile in (x = 1, y = 1).
