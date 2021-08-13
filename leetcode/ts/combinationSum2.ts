// Решение https://youtu.be/Xg3hSZB8tVI
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  let result: number[][] = [];
  let temp: number[] = [];

  backtrack2(candidates, target, 0, temp, result);
  return result;
}

const backtrack2 = function(
  candidates: number[],
  target: number,
  start: number,
  temp: number[],
  result: Array<Array<number>>) {

  if (target === 0) {
    result.push([...temp]);
    return
  }

  if (target < 0) return;

  for (let j = start; j < candidates.length; j++) {
    temp.push(candidates[j]);
    backtrack2(candidates, target - candidates[j], j + 1, temp, result)
    temp.pop();
    while (j <= candidates.length && candidates[j] === candidates[j + 1]) j++;
  }
}

combinationSum2([1,1,2,5,6,7,10], 8);
combinationSum2([2,5,2,1,2], 5);
combinationSum2([1,1,2,4], 6);
