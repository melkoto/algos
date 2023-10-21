/**
 * @param {string} s
 * @return {number}
 */
const longestSemiRepetitiveSubstring = function (s) {
    let max = 0
    let temp = s[0] !== s[1] ? 1 : 0
    
    for (let i = 1; i < s.length; i++) {
        let pair = 2
        
        if (i === 1 && s[i - 1] === s[i] && s[i+1] === s[i]) {
            temp = 0
            continue
        } else if (i === 1 && s[i - 1] === s[i] && s[i+1] !== s[i]) {
            temp = 2
            continue
        }
        
        if (s[i - 1] !== s[i]) {
            temp += 1
            continue
        } else {
            while (pair !== 0) {
                temp += 1
                pair -= 1
            }
        }
        
        if (pair === 0 || pair === 2) {
            max = Math.max(max, temp)
            temp = s[i - 1] !== s[i] ? 1 : 0
        }
    }
    
    return Math.max(temp, max)
};

console.log(longestSemiRepetitiveSubstring("52233"))
console.log(longestSemiRepetitiveSubstring("5494"))
console.log(longestSemiRepetitiveSubstring("11111111"))
console.log(longestSemiRepetitiveSubstring("001"))
