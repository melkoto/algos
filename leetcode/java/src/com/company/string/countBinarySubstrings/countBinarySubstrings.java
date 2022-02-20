package com.company.string.countBinarySubstrings;

class Solution {
  public int countBinarySubstrings(String s) {
    int count = 0, prev = 0, curr = 1;

    for (int i = 1; i < s.length(); i++) {
      if (s.charAt(i - 1) != s.charAt(i)) {
        count += Math.min(curr, prev);
        prev = curr;
        curr = 1;
      } else {
        curr++;
      }
    }
    return count += Math.min(curr, prev);
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "00110011";
    String s2 = "10101";

    System.out.println(new Solution().countBinarySubstrings(s1));
    System.out.println(new Solution().countBinarySubstrings(s2));
  }
}