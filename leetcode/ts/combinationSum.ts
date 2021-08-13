// Решение https://youtu.be/JqOntYEZRlc
function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];
  let temp: number[] = [];

  backtrack(candidates, target, 0, temp, result);
  return result;
}

const backtrack = function(
  candidates: number[],
  target: number,
  start: number,
  temp: number[],
  result: number[][]) {

  if (target === 0) {
    result.push([...temp]);
    return;
  }

  if (target < 0) return;

  for (let j = start; j < candidates.length; j++) {
    temp.push(candidates[j]);
    backtrack(candidates, target - candidates[j], j, temp, result);
    temp.pop();
  }
}

combinationSum([2,3,6,7], 7);
combinationSum([2,3,5], 8);
