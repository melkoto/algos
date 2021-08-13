// Решение https://youtu.be/IgUxOINH9Qw
function combinationSum3(k: number, n: number): number[][] {
  let result: number[][] = [];
  let temp: number[] = [];

  if (k > n) return [];

  backtrack3(k, n, 1, temp, result);
  return result;
}

function backtrack3(
  k: number,
  remain: number,
  start: number,
  temp: number[],
  result: number[][]
) {
  if (remain === 0) {
    if (temp.length === k) {
      result.push([...temp]);
    }
    return;
  }

  for (let i = start; i <= 9; i++) {
    if (remain < i) return;
    temp.push(i);
    backtrack3(k, remain - i, i + 1, temp, result);
    temp.pop();
  }
}

combinationSum3(3, 7);
combinationSum3(3, 9);
combinationSum3(4, 1);
combinationSum3(9, 45);
