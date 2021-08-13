function missingNumber(nums: number[]): number {
    /*
    let n = nums.length,
        num = -1;

    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            num = i;
            return num;
        }
    }
    return num;
    */

    let n = nums.length,
        store = new Set<number>(),
        num = -1;

    nums.forEach(num => store.add(num));

    for (let i = 0; i <= n; i++) {
        if (!store.has(i)) {
            num = i;
            return num;
        }
    }
    return num;
}

missingNumber([9,6,4,2,3,5,7,0,1]);
// missingNumber([0,1]);
