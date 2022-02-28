/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
    let res = []

    for (let i = 0; i < nums.length; i++) {
        let temp = ''
        let j = i

        while (nums[j + 1] - nums[j] === 1 && nums[j + 1]) {
            j++
        }

        if (j !== i) temp += `${nums[i]}->${nums[j]}`
        else temp += nums[i]
        res.push(temp)
        temp = ''
        i = j
    }

    return res
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7])) // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])) // ["0","2->4","6","8->9"]
