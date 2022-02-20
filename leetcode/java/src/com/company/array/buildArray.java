package com.company.array;

import java.util.Arrays;

class Solution {
  public int[] buildArray(int[] nums) {
    int[] res = new int[nums.length];

    for (int i = 0; i < nums.length; i++) {
      res[i] = nums[nums[i]];
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {0,2,1,5,3,4};
    int[] n2 = {5,0,1,2,3,4};

    System.out.println(Arrays.toString(new Solution().buildArray(n1)));
    System.out.println(Arrays.toString(new Solution().buildArray(n2)));
  }
}