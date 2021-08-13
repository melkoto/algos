function searchInsert(nums: number[], target: number): number {
  let
    leftPointer = 0,
    rightPointer = nums.length - 1,
    middlePointer: number;

  while (leftPointer <= rightPointer) {
    middlePointer = Math.floor((leftPointer + rightPointer) / 2)

    if (nums[middlePointer ] === target) return middlePointer;
    if (nums[middlePointer] > target) rightPointer = middlePointer - 1;
    else leftPointer = middlePointer + 1;
  }
  return leftPointer;
};

searchInsert([1,3,5,6], 5) // 2
searchInsert([1,3,5,6], 2) // 1
searchInsert([1,3,5,6], 7) // 4
searchInsert([1,3,5,6], 0) // 0
