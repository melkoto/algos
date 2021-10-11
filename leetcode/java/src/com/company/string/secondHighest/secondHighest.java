package com.company.string.secondHighest;

class Solution {
  public int secondHighest(String s) {
    int fMax = -1, sMax = -1;

    for (char c: s.toCharArray()) {
      if (Character.isDigit(c)) {
        int numValue = (int) c - '0';
        if (numValue > fMax) {
          sMax = fMax;
          fMax = numValue;
        } else if (numValue > sMax && numValue != fMax) {
          sMax = numValue;
        }
      }
    }
    return fMax == sMax ? -1 : sMax;
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "dfa12321afd";
    String s2 = "abc1111";
    String s3 = "ck077";

    System.out.println(new Solution().secondHighest(s1));
    System.out.println(new Solution().secondHighest(s2));
    System.out.println(new Solution().secondHighest(s3));
  }
}