/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function (s) {
    let res = []
}

String.prototype.isUpperCase = function () {
    return this.toUpperCase() === this
}

String.prototype.isLetter = function () {
    return this.toLowerCase() !== this.toUpperCase()
}

console.log('p'.isUpperCase())
console.log('P'.isUpperCase())
