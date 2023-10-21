/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = function(s) {
    const u = new Set(s)
    return u.size
};

console.log(minimizedStringLength("aaabc"))
console.log(minimizedStringLength("cbbd"))
console.log(minimizedStringLength("dddaaa"))
