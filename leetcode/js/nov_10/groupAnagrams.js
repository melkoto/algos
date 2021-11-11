// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    let s = {}

    for (let str of strs) {
        let currWord = str.split('').sort().join('')

        if (currWord in s) {
            s[currWord].push(str)
        }
        s[currWord] = [str]
    }
    return Object.values(s).sort((a,b) => a.length - b.length)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
