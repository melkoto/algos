/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    const stack = []

    let depth = 0, tempDepth = 0

    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (char === '(') {
            stack.push('(')
            tempDepth++
        } else if (char === ')') {
            stack.pop()
            depth = Math.max(depth, tempDepth)
            tempDepth--
        }


        if (!stack.length) tempDepth = 0
    }
    return depth
};
