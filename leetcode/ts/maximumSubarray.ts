function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(curr + nums[i], nums[i]);
    max = Math.max(max, curr);
  }
  return max;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// time: O(n^2)   space: O(1)
// function maxSubArray(nums: number[]): number {
//   let max = Math.min(10, -6);
//
//   if (nums.length === 1) return nums[0];
//
//   for (let i = 0; i < nums.length; i++) {
//     let tempMax = 0;
//     for (let j = i; j < nums.length; j++) {
//       tempMax += nums[j];
//       max = Math.max(tempMax, max);
//     }
//   }
//
//   return max;
// }
//
