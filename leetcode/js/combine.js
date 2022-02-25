/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    // code here
    let res = []
    btr(1, [], res, k, n)
    return res
}

function btr(start, curr, res, k, n) {
    if (curr.length === k) {
        res.push([...curr])
    }

    for (let i = start; i <= n; i++) {
        curr.push(i)
        btr(i + 1, curr, res, k, n)
        curr.pop()
    }
}

console.log(combine(4, 2))
console.log(combine(1, 1))
