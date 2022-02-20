package com.company.array.decompressRLElist;

import java.util.Arrays;

class Solution {
  public int[] decompressRLElist(int[] nums) {
    int len = 0;

    for (int i = 0; i < nums.length; i += 2) {
      len += nums[i];
    }

    int[] res = new int[len];
    int start = 0;

    for (int i = 0; i < nums.length; i += 2) {
      int freq = nums[i];
      int val = nums[i + 1];
      Arrays.fill(res, start, start + freq, val);
      start += freq;
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {1, 2, 3, 4};
    int[] n2 = {1, 1, 2, 3};
    int[] n3 = {7, 5};
    int[] n4 = {1, 1, 2, 3, 3, 4};

    System.out.println(Arrays.toString(new Solution().decompressRLElist(n1)));
    System.out.println(Arrays.toString(new Solution().decompressRLElist(n2)));
    System.out.println(Arrays.toString(new Solution().decompressRLElist(n3)));
    System.out.println(Arrays.toString(new Solution().decompressRLElist(n4)));
  }
}