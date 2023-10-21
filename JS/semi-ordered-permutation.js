/**
 * @param {number[]} nums
 * @return {number}
 */
const semiOrderedPermutation = function (nums) {
    const n = nums.length
    if (nums[0] === 1 && nums[n - 1] === n) return 0
    
    let cn = 0
    
    let i = nums.indexOf(1)
    while (nums[0] !== 1 && i >= 0) {
        const curr = nums[i - 1]
        
        nums[i - 1] = nums[i]
        nums[i] = curr
        
        i -= 1
        cn += 1
    }
    
    if (nums[0] === 1 && nums[n - 1] === n) return cn
    i = nums.indexOf(n)
    while (nums[n - 1] !== n && i < n) {
        const curr = nums[i]
        
        nums[i] = nums[i + 1]
        nums[i + 1] = curr
        
        i += 1
        cn += 1
    }
    
    return cn
};

console.log(semiOrderedPermutation([2, 1, 4, 3]))
console.log(semiOrderedPermutation([2, 4, 1, 3]))
console.log(semiOrderedPermutation([1, 3, 4, 2, 5]))
console.log(semiOrderedPermutation([2, 1]))
console.log(semiOrderedPermutation([2, 1, 3]))
