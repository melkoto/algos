/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
    let sum = Array.from({ length: 10001 }, () => 0)
    for (let num of nums) sum[num] += num

    for (let i = 2; i < 10001; i++) {
        sum[i] = Math.max(sum[i - 1], sum[i - 2] + sum[i])
    }
    return sum[1000]
}

console.log(deleteAndEarn([3, 4, 2]))
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))
