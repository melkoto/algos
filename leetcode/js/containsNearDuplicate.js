/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    if (map.has(curr) && Math.abs(map.get(curr) - i) <= k) return true
    map.set(curr, i)
  }
  return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
