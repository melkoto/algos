function findDisappearedNumbers(nums: number[]): number[] {
    let store = new Set<number>(),
        result: number[] = [];

    for (let num of nums) {
        store.add(Number(num))
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!store.has(i)) {
            result.push(i);
        }
    }
    return result;
}

findDisappearedNumbers([4,3,2,7,8,2,3,1]);
findDisappearedNumbers([1,1]);
