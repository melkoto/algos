package com.company.array.sortedSquare;

import java.util.Arrays;

class Solution {
  public int[] sortedSquares(int[] nums) {
    int[] res = new int[nums.length];
    int l = 0, r = nums.length - 1;

    for (int i = nums.length - 1; i >= 0; i--) {
      if (Math.abs(nums[l]) < Math.abs(nums[r])) {
        res[i] = (int) Math.pow(nums[r], 2);
        r--;
      } else {
        res[i] = (int) Math.pow(nums[l], 2);
        l++;
      }
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] nums1 = {-4, -1, 0, 3, 10};
    int[] nums2 = {-7, -3, 2, 3, 11};


    System.out.println(Arrays.toString(new Solution().sortedSquares(nums1)));
    System.out.println(Arrays.toString(new Solution().sortedSquares(nums2)));
  }
}