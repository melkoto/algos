package com.company.array.dominantIndex;

class Solution {
  public int dominantIndex(int[] nums) {
    if (nums.length == 1) return 0;
    int fMax = 0, sMax = 0, ind = 0;

    for (int i = 0; i < nums.length; i++) {
      if (nums[i] > fMax) {
        sMax = fMax;
        fMax = nums[i];
        ind = i;
      } else if (nums[i] > sMax) {
        sMax = nums[i];
      }
    }
    return fMax / 2 >= sMax ? ind : -1;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {3, 6, 1, 0};
    int[] n2 = {1, 2, 3, 4};
    int[] n3 = {0, 0, 0, 2};
    int[] n4 = {1};

    System.out.println(new Solution().dominantIndex(n1));
    System.out.println(new Solution().dominantIndex(n2));
    System.out.println(new Solution().dominantIndex(n3));
  }
}