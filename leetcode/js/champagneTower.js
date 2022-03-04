/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = function (poured, query_row, query_glass) {
    let s = Array.from({ length: 102 }, () =>
        Array.from({ length: 102 }, () => 0)
    )

    s[0][0] = poured

    for (let i = 0; i <= query_row; i++) {
        for (let j = 0; j <= i; j++) {
            let q = (s[i][j] - 1) / 2

            if (q > 0) {
                s[i + 1][j] += q
                s[i + 1][j + 1] += q
            }
        }
    }
    return Math.min(1, s[query_row][query_glass])
}

console.log(champagneTower(2, 1, 1))
