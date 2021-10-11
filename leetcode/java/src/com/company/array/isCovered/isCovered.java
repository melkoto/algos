package com.company.array.isCovered;

class Solution {
  public boolean isCovered(int[][] ranges, int left, int right) {
    return false;
  }
}

class Main {
  public static void main(String[] args) {
    int[][] ranges1 = {{1, 2}, {3, 4}, {5, 6}};
    int l1 = 2, r1 = 5;

    int[][] ranges2 = {{1, 10}, {10, 20}};
    int l2 = 21, r2 = 21;

    int[][] ranges3 = {{1,1}};
    int l3 = 1, r3 = 50;

    System.out.println(new Solution().isCovered(ranges1, l1, r1));
    System.out.println(new Solution().isCovered(ranges2, l2, r2));
    System.out.println(new Solution().isCovered(ranges3, l3, r3));
  }
}