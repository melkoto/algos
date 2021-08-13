// Решение https://www.youtube.com/watch?v=1K1qAkMStbM
function fourSum(nums: number[], target: number): number[][] {
  // [-2, -1, 0, 0, 0, 1, 2]
  if (nums.length < 4) return [];
  nums = nums.sort((a, b) => a - b);

  const length = nums.length;
  const result: number[][] = [];

  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
    if (
      nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] <
      target
    )
      continue;

    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
      if (nums[i] + nums[j] + nums[length - 1] + nums[length - 2] < target)
        continue;

      let p1 = j + 1;
      let p2 = length - 1;

      while (p1 < p2) {
        let sum = nums[i] + nums[j] + nums[p1] + nums[p2];

        if (sum < target) p1++;
        else if (sum > target) p2--;
        else {
          result.push([nums[i], nums[j], nums[p1], nums[p2]]);
          while (p1 < p2 && nums[p1] === nums[p1 + 1]) p1++;
          while (p1 < p2 && nums[p2] === nums[p2 - 1]) p2--;
          p1++;
          p2--;
        }
      }
    }
  }
  return result;
}

fourSum([1, 0, -1, 0, -2, 2], 0); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
fourSum([2, 2, 2, 2, 2], 8); // [[2,2,2,2]]
