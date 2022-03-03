/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
    let s = Array.from({ length: nums.length }, () => 0)
    let sum = 0
    for (let i = 2; i < s.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            s[i] = 1 + s[i - 1]
            sum += s[i]
        }
    }
    return sum
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4])) // 3
console.log(numberOfArithmeticSlices([1])) // 0
