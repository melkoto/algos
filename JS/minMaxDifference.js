/**
 * @param {number} num
 * @return {number}
 */
const minMaxDifference = function(num) {
    const numAsStr = num.toString()
    let candidate = 0
    let changingNumber = -1

    let currNum

    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < numAsStr.length; i++) {
        changingNumber = numAsStr[i]

        let newNum = numAsStr

        for (j = 0; j < numAsStr.length; j++) {
            if (changingNumber === numAsStr[j]) {
                newNum = newNum.substring(0, j) + candidate + newNum.substring(j + 1)
            }
        }

        currNum = Number.parseInt(newNum)

        if (currNum > max) max = currNum

        candidate++
        
        if (candidate === 9) break
    }
    return max
};

console.log(minMaxDifference(11891))
