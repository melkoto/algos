/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {

    for (let i = 0; i < num / 3; i++) {
        let f = i
        let s = i + 1
        let t = i + 2

        if (f + s + t === num) {
            return [f, s, t]
        } else if (f + s + t > num) return []
    }
}

console.log(sumOfThree(33))
console.log(sumOfThree(0))
console.log(sumOfThree(1))
console.log(sumOfThree(2))
console.log(sumOfThree(3))
console.log(sumOfThree(4))
console.log(sumOfThree(433223717))
console.log(sumOfThree(445892767))
