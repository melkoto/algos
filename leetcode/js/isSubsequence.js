/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    if (s.length > t.length) return false
    let p1 = 0

    for (let i = 0; p1 < s.length, i < t.length; i++) {
        if (s[p1] !== t[i]) continue
        else p1++
    }
    return p1 === s.length
}

console.log(isSubsequence('abc', 'ahbgdc')) // true
console.log(isSubsequence('axc', 'ahbgdc')) // false
console.log(isSubsequence('axc', 'ahbgdcx')) // false
console.log(isSubsequence('abc', 'xavbc')) // true
