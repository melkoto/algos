function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  if (newColor === image[sr][sc]) return image;
  let rows = image.length;
  let cols = image[0].length;
  let source = image[sr][sc];

  dfs(image, sr, sc, newColor, rows, cols, source);
  console.log(image);
  return image;
}

function dfs(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
  rows: number,
  cols: number,
  source: number
) {
  if (sr < 0 || sr >= rows || sc < 0 || sc >= cols) return;
  else if (image[sr][sc] !== source) return;

  image[sr][sc] = newColor;
  dfs(image, sr - 1, sc, newColor, rows, cols, source);
  dfs(image, sr + 1, sc, newColor, rows, cols, source);
  dfs(image, sr, sc - 1, newColor, rows, cols, source);
  dfs(image, sr, sc + 1, newColor, rows, cols, source);
}

floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
