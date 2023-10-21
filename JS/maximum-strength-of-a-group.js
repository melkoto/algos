/**
 * @param {number[]} nums
 * @return {number}
 */
const maxStrength = function(nums) {
    nums.sort((a, b) => a - b)
    
    const negatives = nums.filter(num => num < 0)
    const positives = nums.filter(num => num > 0)
    
    const negCount = negatives.length
    
    console.log(negatives)
    console.log(positives)
    
    let res = 0
    
    if (negCount % 2 === 0 && negCount > 1) {
        res = 1
        for (const num of negatives) {
            res *= num
        }
        
        for (const num of positives) {
            res *= num
        }
        
    } else if (negCount > 1) {
        res = 1
        for (let i = 0; i < negCount - 1; i++) {
            const num = negatives[i]
            res *= num
        }
        
        for (const num of positives) {
            res *= num
        }
        
    }
    
    return  res
    
};

console.log(maxStrength([3,-1,-5,2,5,-9]))
console.log(maxStrength([-4,-5,-4]))
console.log(maxStrength([0,-1]))
