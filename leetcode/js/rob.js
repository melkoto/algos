/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    const memo = Array.from({ length: 100 }, () => -1)
    return robFrom(0, nums, memo)
}

function robFrom(i, nums, memo) {
    if (i >= nums.length) {
        return 0
    }

    if (memo[i] > -1) {
        return memo[i]
    }

    let ans = Math.max(
        robFrom(i + 1, nums, memo),
        robFrom(i + 2, nums, memo) + nums[i]
    )
    memo[i] = ans
    return ans
}

console.log(rob([2, 7, 9, 3, 1]))
