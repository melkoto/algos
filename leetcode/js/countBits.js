/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
    let res = []

    for (let i = 0; i <= n; i++) {
        let j = i
        let count = 0

        while (j > 0) {
            count += j & 1
            j >>= 1
        }

        res.push(count)
    }
    return res
}

console.log(countBits(2))
console.log(countBits(5))
