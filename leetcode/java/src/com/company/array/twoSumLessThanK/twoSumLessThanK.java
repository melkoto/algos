package com.company.array.twoSumLessThanK;

import java.util.Arrays;

class Solution {
  public int twoSumLessThanK(int[] nums, int k) {
    Arrays.sort(nums);
    int res = -1;
    int l = 0, r = nums.length - 1;

    while (l < r) {
      int leftNum = nums[l];
      int rightNum = nums[r];

      if (leftNum + rightNum > k) {
        r--;
      } else if (leftNum + rightNum < k) {
        res = Math.max(res, leftNum + rightNum);
        l++;
      }
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {34,23,1,24,75,33,54,8}; // 1,8,23,24,33,34,54,75
    int k1 = 60;

    int[] n2 = {10,20,30};
    int k2 = 15;

    System.out.println(new Solution().twoSumLessThanK(n1, k1));
    System.out.println(new Solution().twoSumLessThanK(n2, k2));
  }
}