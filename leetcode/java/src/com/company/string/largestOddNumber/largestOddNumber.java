package com.company.string.largestOddNumber;

class Solution {
  public String largestOddNumber(String num) {
    int res = -1;
    for (int i = num.length() - 1; i >= 0; i--) {
      int curr = num.charAt(i) - '0';
      if (curr % 2 == 1 && i > 0) return num.substring(0, i + 1);
      if (curr % 2 == 1 && curr > res) res = curr;
    }
    return res >= 0 ? Integer.toString(res) : "";
  }
}

class Main {
  public static void main(String[] args) {
    String n1 = "52"; // 5
    String n2 = "4206"; // ""
    String n3 = "35427"; // 35427
    String n4 = "1";
    String n5 = "2";

    System.out.println(new Solution().largestOddNumber(n1));
    System.out.println(new Solution().largestOddNumber(n2));
    System.out.println(new Solution().largestOddNumber(n3));
    System.out.println(new Solution().largestOddNumber(n4));
    System.out.println(new Solution().largestOddNumber(n5));
  }
}