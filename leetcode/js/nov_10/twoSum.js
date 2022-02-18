// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    let obj = {}

    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i]

        if (numbers[i] in obj) {
            return [obj[numbers[i]], i]
        }
        obj[diff] = i
    }

    // let s = new Map()
    //
    // for (let i = 0; i < numbers.length; i++) {
    //     let diff = target - numbers[i]
    //
    //     if (s.has(numbers[i])) {
    //         return [s.get(diff), i]
    //     }
    //     s.set(diff, i)
    // }
}

console.log(twoSum([2, 7, 11, 15], 9))
