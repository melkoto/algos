/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    // code here
    let res = []
    btr(nums, res, 0)
    return res
}

function btr(nums, res, start) {
    // code here
    if (start >= nums.length) {
        res.push([...nums])
    }

    for (let i = start; i < nums.length; i++) {
        swap(nums, start, i)
        btr(nums, res, start + 1)
        swap(nums, start, i)
    }
}

function swap(arr, f, s) {
    let temp = arr[f]
    arr[f] = arr[s]
    arr[s] = temp
}

console.log(permute([1, 2, 3]))
console.log(permute([0, 1]))
console.log(permute([1]))
