/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    let memo = Array.from({ length: n + 1 }, () => 0)
    return climb(0, n, memo)
}

function climb(i, n, memo) {
    if (i > n) {
        return 0
    }
    if (i === n) {
        return 1
    }
    if (memo[i] > 0) {
        return memo[i]
    }

    memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo)
    return memo[i]
}

console.log(climbStairs(3))
