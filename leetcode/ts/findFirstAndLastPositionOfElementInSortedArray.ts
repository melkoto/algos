// Решение https://youtu.be/X2zcewkLdSw

function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) return [-1, -1];

    function findLeftIndex() {
        let left = 0;
        let right = nums.length - 1;
        let leftIndex = - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] > target) right = mid - 1;
            else if (nums[mid] < target) left = mid + 1;
            else {
                leftIndex = mid;
                right = mid - 1;
            }
        }
        return leftIndex;
    }

    function findRightIndex() {
        let left = 0;
        let right = nums.length - 1;
        let rightIndex = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] > target) right = mid - 1;
            else if (nums[mid] < target) left = mid + 1;
            else {
                rightIndex = mid;
                left = mid + 1;
            }

        }
        return rightIndex;
    }

    const left = findLeftIndex();

    if (left === -1) return [-1, -1];

    const right = findRightIndex();

    return [left, right];
};


searchRange([5,7,7,8,8,10], 8);