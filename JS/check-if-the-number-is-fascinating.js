/**
 * @param {number} n
 * @return {boolean}
 */
const isFascinating = function (n) {
    const str = `${n}${n * 2}${n * 3}`
    const obj = {}
    
    for (const char of str) {
        if (char in obj) {
            obj[char] += 1
        } else {
            obj[char] = 1
        }
    }
    
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] > 1 || str[i] === '0') return false
    }
    
    return true
};

console.log(isFascinating(192))
console.log(isFascinating(198))
console.log(isFascinating(100))
