/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let res = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let curr = nums[i]
            if (curr === nums[j]) {
                if ((i * j ) % k === 0) {
                    res++
                }
            }
        }
    }

    return res
};

console.log(countPairs([3,1,2,2,1,3], 2))
