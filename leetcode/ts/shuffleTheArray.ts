function shuffle(nums: number[], n: number): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length / 2; i++) {
    let j = nums.length / 2 + i;
    result.push(nums[i], nums[j]);
  }

  return result;
};
