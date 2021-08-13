function singleNumber(nums: number[]): number {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
}

singleNumber([4,1,2,1,2]);
singleNumber([2,2,1])

