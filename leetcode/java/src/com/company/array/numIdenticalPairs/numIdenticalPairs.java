package com.company.array.numIdenticalPairs;

class Solution {
  public int numIdenticalPairs(int[] nums) {
    return 1;
  }
}

class Main {
  public static void main(String[] args) {
    int[] nums1 = {1, 2, 3, 1, 1, 3};
    int[] nums2 = {1, 1, 1, 1};
    int[] nums3 = {1, 2, 3};

    System.out.println(new Solution().numIdenticalPairs(nums1));
    System.out.println(new Solution().numIdenticalPairs(nums2));
    System.out.println(new Solution().numIdenticalPairs(nums3));
  }
}