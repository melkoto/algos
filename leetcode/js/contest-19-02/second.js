/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(finalSum) {
    let res = []
    btr(finalSum, 0, [], res, 2)

    return res[0] ? res.sort((a,b) => b.length - a.length)[0] : []

};

function btr(num, sum, arr, res, start) {
    if (sum > num) return
    if (sum === num) res.push([...arr])

    for (let i = start; i <= num; i % 2 === 0 ? i+=2 : i++) {
        if (i % 2 === 0) arr.push(i)
        btr(num, sum + i, arr, res,  i + 2)
        arr.pop()
    }
}

console.log(sumOfThree(12), "12")
console.log(sumOfThree(7), "7")
console.log(sumOfThree(8), "8")
console.log(sumOfThree(28), "28")
console.log(sumOfThree(950), "950")
