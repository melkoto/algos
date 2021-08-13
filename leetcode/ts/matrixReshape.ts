function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let res: number[][] = new Array(r)
      .fill([])
      .map(() => new Array(c).fill(null)),
    flat = myFlatFn(mat);

  if (flat.length !== r * c) return mat;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      res[i][j] = <number>flat.pop();
    }
  }
  return res;
}

function myFlatFn(arr: number[][]): number[] {
  let res: number[] = [],
    r: number,
    c: number;

  for (r = 0; r < arr.length; r++) {
    for (c = 0; c < arr[r].length; c++) {
      res.push(arr[r][c]);
    }
  }
  return res.reverse();
}

matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  2,
  4
); //[[1,2],[3,4]]

matrixReshape(
  [
    [1, 2],
    [3, 4],
  ],
  1,
  4
); // [[1,2,3,4]]

matrixReshape([[1, 2, 3, 4]], 2, 2);

matrixReshape([[1, 2]], 1, 1);
