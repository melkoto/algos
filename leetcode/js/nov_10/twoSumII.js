// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let p1 = 0, p2 = numbers.length - 1

    while (p1 < p2) {
        let sum = numbers[p1] + numbers[p2]
        if (sum > target) {
            p2--
        }

        else if (sum < target) p1++
        else {
            return [p1+1, p2+1]
        }

    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1, 0], -1))

// Time complexity: O(n)
// Space complexity: O(1)

