package com.company.string.countLetters;

class Solution {
  public int countLetters(String s) {
    int res = 0;
    int temp = 0;

    for (int i = 0; i < s.length() - 1; i++) {
      if (s.charAt(i) == s.charAt(i + 1)) {
        temp++;
        res += temp;
      } else {
        temp++;
        res += temp;
        temp = 0;
      }
    }

    res += temp + 1;
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    String s = "aaaabbaccc";
    String s1 = "aaaba";
    String s2 = "aaaaaaaaaa";

    System.out.println(new Solution().countLetters(s));
    System.out.println(new Solution().countLetters(s1));
    System.out.println(new Solution().countLetters(s2));
  }
}