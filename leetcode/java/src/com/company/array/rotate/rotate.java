package com.company.array.rotate;

import java.util.Arrays;

class Solution {
  public void rotate(int[] nums, int k) {
    int n = nums.length - 1;
    for (int i = 0; i < k; i++) {
      int last = nums[n];
      for (int j = 0; j <= n; j++) {
        int temp = nums[j];
        nums[j] = last;
        last = temp;
      }
    }
    System.out.println(Arrays.toString(nums));
  }
}

class Main {
  public static void main(String[] args) {
    int[] nums1 = {1, 2, 3, 4, 5, 6, 7};
    int k1 = 3;

    int[] nums2 = {-1, -100, 3, 99};
    int k2 = 2;

    new Solution().rotate(nums1, k1);
    new Solution().rotate(nums2, k2);
  }
}