package com.company.array.arraySign;

class Solution {
  public int arraySign(int[] nums) {
    int res = nums[0];

    for (int i = 1; i < nums.length; i++) {
      int num = nums[i];
      if (num == 0) return 0;
      else if (num > 0) res *= 1;
      else res *= -1;
    }

    return res > 0 ? 1 : -1;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {-1, -2, -3, -4, 3, 2, 1};
    int[] n2 = {1, 5, 0, 2, -3};
    int[] n3 = {-1, 1, -1, 1, -1};
    int[] n4 = {41, 65, 14, 80, 20, 10, 55, 58, 24, 56, 28, 86, 96, 10, 3, 84, 4, 41, 13, 32, 42, 43, 83, 78, 82, 70, 15, -41};

    System.out.println(new Solution().arraySign(n1));
    System.out.println(new Solution().arraySign(n2));
    System.out.println(new Solution().arraySign(n3));
    System.out.println(new Solution().arraySign(n4));
  }
}