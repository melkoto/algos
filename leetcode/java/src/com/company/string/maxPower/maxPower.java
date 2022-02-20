package com.company.string.maxPower;

class Solution {
  public int maxPower(String s) {
    int pow = 1;
    int tempPow = 1;

    for (int i = 0; i < s.length() - 1; i++) {
      char curr = s.charAt(i);
      char next = s.charAt(i + 1);

      if (curr == next) {
        tempPow++;
      } else {
        tempPow = 1;
      }

      pow = Math.max(pow, tempPow);
    }
    return pow;
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "leetcode";
    String s2 = "abbcccddddeeeeedcba";
    String s3 = "triplepillooooow";
    String s4 = "hooraaaaaaaaaaay";
    String s5 = "ss";

    System.out.println(new Solution().maxPower(s1));
    System.out.println(new Solution().maxPower(s2));
    System.out.println(new Solution().maxPower(s3));
    System.out.println(new Solution().maxPower(s4));
    System.out.println(new Solution().maxPower(s5));
  }
}