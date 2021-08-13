// Решение https://www.youtube.com/watch?v=8RPQp_57ujk

/**
 Do not return anything, modify nums1 in-place instead.
 */
// @ts-ignore
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let left = m - 1;
  let right = n - 1;

  for (let p = m + n - 1; p >= 0; p--) {
    if (right < 0) break;
    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[p] = nums1[left--];
    } else {
      nums1[p] = nums2[right--];
    }
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
