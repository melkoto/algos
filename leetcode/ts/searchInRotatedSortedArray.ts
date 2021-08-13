// Решение (Solution) https://youtu.be/-JwOyFFG3a4

function search(nums: number[], target: number): number {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) end = mid - 1;
            else start = mid + 1;
        } else {
            if (target <= nums[end] && target > nums[mid]) start = mid + 1;
            else end = mid - 1;
        }
    }
    return -1;
};

search([4,5,6,7,0,1,2], 0);
