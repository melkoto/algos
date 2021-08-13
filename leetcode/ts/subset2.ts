// Решение https://youtu.be/IuCMKl3NxCo
function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let result: [][] = [];
  let temp: number[] = [];
  btr(nums, 0, temp, result);
  return result;
}

function btr(
  nums: number[],
  start: number,
  temp: number[],
  result: number[][]
) {
  result.push([...temp]);

  for (let i = start; i < nums.length; i++) {
    temp.push(nums[i]);
    btr(nums, i + 1, temp, result);
    temp.pop();
    while (i <= nums.length && nums[i] === nums[i + 1]) i++;
  }
}

subsetsWithDup([1, 2, 2]);
subsetsWithDup([4, 4, 4, 1, 4]);
