/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
const minExtraChar = function(s, dictionary) {
    const used = Array.from({length: s.length + 1}, () => Number.MAX_VALUE)
    used[0] = 0
    
    for (let i = 0; i < s.length; i++) {
        const t = i + 1
        
        for (const word of dictionary) {
            const wl = word.length
            const f = i - wl + 1
            
            if (s.substring(f, t) === word) {
                if (t - wl >= 0) {
                    used[t] = Math.min(used[t], used[t - wl])
                } else {
                    used[t] = Math.min(used[t], 0)
                }
            }
        }
        
        if (used[t] === Number.MAX_VALUE && used[t]) used[t] = used[i] + 1
    }
    
    return used[s.length]
};

console.log(minExtraChar("leetscode", ["leet","code","leetcode"]))
console.log(minExtraChar("sayhelloworld", ["hello","world"]))
console.log(minExtraChar("dwmodizxvvbosxxw", ["ox","lb","diz","gu","v","ksv","o","nuq","r","txhe","e","wmo","cehy","tskz","ds","kzbu"]))
