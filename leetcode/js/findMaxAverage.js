/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let currSum = nums.slice(0 , k).reduce((r, n) => r + n, 0);
  let bestSum = currSum;
  for (let i = 1; i < nums.length - k + 1; i++) {
    currSum = currSum - nums[i - 1] + nums[i + k - 1]
    bestSum = Math.max(bestSum, currSum);
  }
  return bestSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
console.log(findMaxAverage([5], 1))
console.log(findMaxAverage([0, 4, 0, 3, 2], 1))
