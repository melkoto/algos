package com.company.array.runningSum;

import java.util.Arrays;

class Solution {
  public int[] runningSum(int[] nums) {
    int[] res = new int[nums.length];
    res[0] = nums[0];
    int sum = nums[0];

    for (int i = 1; i < nums.length; i++) {
      sum += nums[ i ];
      res[i] = sum;
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {1, 2, 3, 4};
    int[] n2 = {1, 1, 1, 1, 1};
    int[] n3 = {3, 1, 2, 10, 1};

    System.out.println(Arrays.toString(new Solution().runningSum(n1)));
    System.out.println(Arrays.toString(new Solution().runningSum(n2)));
    System.out.println(Arrays.toString(new Solution().runningSum(n3)));
  }
}