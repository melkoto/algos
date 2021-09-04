package com.company.array.smallerNumbersThanCurrent;

import java.util.Arrays;

class Solution {
  public int[] smallerNumbersThanCurrent(int[] nums) {
    int[] range = new int[102];
    int[] res = new int[nums.length];

    for (int i = 0; i < nums.length; i++) {
      range[nums[i] + 1]++;
    }

    for (int i = 1; i < range.length; i++) {
      range[i] += range[i-1];
    }

    for (int i = 0; i < nums.length; i++) {
      res[i] = range[nums[i]];
    }

    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {8, 1, 2, 2, 3};
    int[] n2 = {6, 5, 4, 8};
    int[] n3 = {7, 7, 7, 7};

    System.out.println(Arrays.toString(new Solution().smallerNumbersThanCurrent(n1)));
    System.out.println(Arrays.toString(new Solution().smallerNumbersThanCurrent(n2)));
    System.out.println(Arrays.toString(new Solution().smallerNumbersThanCurrent(n3)));
  }
}