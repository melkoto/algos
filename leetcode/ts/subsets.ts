// Решение https://youtu.be/mtOMVcWxvfE
function subsets(nums: number[]): number[][] {
  let result: number[][] = [];
  let temp: number[] = [];

  brt(nums, 0, temp, result);
  return result;
}

function brt(
  nums: number[],
  start: number,
  temp: number[],
  result: number[][]
) {
  result.push([...temp]);

  for (let i = start; i < nums.length; i++) {
    temp.push(nums[i]);
    brt(nums, i + 1, temp, result);
    temp.pop();
  }
}

subsets([1, 2, 3]);
