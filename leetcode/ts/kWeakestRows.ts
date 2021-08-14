function kWeakestRows(mat: number[][], k: number): number[] {
  let store: { [key: number]: number } = {};

  mat.forEach((subArr, ind) => {
    store[ind] = subArr.reduce((acc, cur) => acc + cur);
  });

  return Object.entries(store)
    .sort((a, b) => a[1] - b[1])
    .map((arr) => Number([arr[0]]))
    .slice(0, k);
}

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);

console.log(
  kWeakestRows(
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ],
    2
  )
);
