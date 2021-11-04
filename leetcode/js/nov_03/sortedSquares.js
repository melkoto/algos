// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    let r = new Array(nums.length).fill(0)
    let p1 = 0, p2 = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        let p1Num = nums[p1]
        let p2Num = nums[p2]
        if (Math.abs(p1Num) < Math.abs(p2Num)) {
            // r[i] = p2Num ** 2
            r[i] = Math.pow(p2Num, 2)
            p2--
        } else {
            r[i] = p1Num ** 2
            p1++
        }
    }
    return r
};

console.log(sortedSquares([-4,-1,1,3,10]))
