function imageSmoother(img: number[][]): number[][] {
  let result = JSON.parse(JSON.stringify(img));

  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      result[i][j] = addSurrNums(img, i, j);
    }
  }

  console.log(result);
  return result;
}

function addSurrNums(arr: number[][], i: number, j: number): number {
  let count = 0,
    tl = 0, // top left
    tm = 0, // top middle
    tr = 0, // top right
    ml = 0, // mid left
    mm = 0, // mid middle
    mr = 0, // mid right
    bl = 0, // bottom left
    bm = 0, // bottom middle
    br = 0; // bottom right

  if (typeof (arr[i - 1] && arr[i - 1][j - 1]) !== "undefined") {
    tl = arr[i - 1][j - 1];
    count++;
  }

  if (typeof (arr[i - 1] && arr[i - 1][j]) !== "undefined") {
    tm = arr[i - 1][j];
    count++;
  }

  if (typeof (arr[i - 1] && arr[i - 1][j + 1]) !== "undefined") {
    tr = arr[i - 1][j + 1];
    count++;
  }

  if (typeof arr[i][j - 1] !== "undefined") {
    ml = arr[i][j - 1];
    count++;
  }

  if (typeof arr[i][j] !== "undefined") {
    mm = arr[i][j];
    count++;
  }

  if (typeof arr[i][j + 1] !== "undefined") {
    mr = arr[i][j + 1];
    count++;
  }

  if (typeof (arr[i + 1] && arr[i + 1][j - 1]) !== "undefined") {
    bl = arr[i + 1][j - 1];
    count++;
  }

  if (typeof (arr[i + 1] && arr[i + 1][j]) !== "undefined") {
    bm = arr[i + 1][j];
    count++;
  }

  if (typeof (arr[i + 1] && arr[i + 1][j + 1]) !== "undefined") {
    br = arr[i + 1][j + 1];
    count++;
  }

  return Math.floor((tl + tm + tr + ml + mm + mr + bl + bm + br) / count);
}

imageSmoother([
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
]);

imageSmoother([
  [1, 2, 2, 1, 3, 1, 1],
  [2, 1, 3, 3, 2, 2, 1],
  [3, 3, 1, 2, 1, 3, 2],
]);

imageSmoother([
  [1, 2, 2, 1],
  [2, 3, 1, 3],
  [3, 1, 1, 2],
  [1, 1, 2, 2],
  [3, 1, 3, 2],
  [2, 2, 2, 2],
  [1, 1, 1, 2],
]);

imageSmoother([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);

imageSmoother([
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16],
]);
