package com.company.array.kLengthApart;

class Solution {
  public boolean kLengthApart(int[] nums, int k) {
    int lastOne = 0;

    for (int i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
        lastOne = i + 1;
        break;
      }
    }

    for (int i = lastOne + 1; i < nums.length; i++) {
      if (nums[i] == 1 && i - lastOne < k) return false;
      if (nums[i] == 1) {
        lastOne = i + 1;
      }
    }

    return true;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {1, 0, 0, 0, 1, 0, 0, 1};
    int k1 = 2;

    int[] n2 = {1, 0, 0, 1, 0, 1};
    int k2 = 2;

    int[] n3 = {1, 1, 1, 1, 1};
    int k3 = 0;

    int[] n4 = {0, 1, 0, 1};
    int k4 = 1;

    System.out.println(new Solution().kLengthApart(n1, k1));
    System.out.println(new Solution().kLengthApart(n2, k2));
    System.out.println(new Solution().kLengthApart(n3, k3));
    System.out.println(new Solution().kLengthApart(n4, k4));
  }
}