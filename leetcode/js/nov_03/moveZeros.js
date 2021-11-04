// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let j = 0

    for (let num of nums) {
        if (num !== 0) {
            nums[j++] = num
        }
    }

    for (let i = j; i < nums.length; i++) {
        nums[i] = 0
    }
};

console.log(moveZeroes([0,1,0,3,12]))
