// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    let s = new Set()

    for (let num of nums) s.add(num)

    for (let i = 0; i < nums.length + 1; i++) {
        if (!s.has(i)) return i
    }
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
