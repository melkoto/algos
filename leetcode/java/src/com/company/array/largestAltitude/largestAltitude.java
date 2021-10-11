package com.company.array.largestAltitude;

class Solution {
  public int largestAltitude(int[] gain) {
    int ans = gain[0];
    for (int i = 1; i < gain.length; i++) {
      gain[i] = gain[i-1] + gain[i];
      ans = Math.max(ans, gain[i]);
    }

    return Math.max(ans, 0);
  }
}

class Main {
  public static void main(String[] args) {
    int[] g1 = {-5, 1, 5, 0, -7}; // 1
    int[] g2 = {-4, -3, -2, -1, 4, 3, 2}; // 0

    System.out.println(new Solution().largestAltitude(g1));
    System.out.println(new Solution().largestAltitude(g2));
  }
}