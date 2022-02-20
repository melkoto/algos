// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    let c = {}
    // let c = new Map()
    let res = []

    for (let num of nums1) {
        if (num in c) c[num] = c[num] + 1
        // if (c.has(num)) c.get(num)
        else c[num] = 1 // c.set(num, 1)
    }

    for (let num of nums2) {
        if (num in c) {
            res.push(num)
            c[num] = c[num] - 1

            if (c[num] === 0) delete c[num]
        }
    }
    return res
};

console.log(intersect([1,2,2,1], [2,2]))
