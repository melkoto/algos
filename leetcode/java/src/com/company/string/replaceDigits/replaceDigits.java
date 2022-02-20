package com.company.string.replaceDigits;

class Solution {
  public String replaceDigits(String s) {
    StringBuilder res = new StringBuilder();

    for (int i = 1; i < s.length(); i += 2) {
      res.append(s.charAt(i - 1));
      res.append(shift(s.charAt(i - 1), s.charAt(i)));
    }
    return s.length() % 2 == 0
            ? res.toString()
            : res.append(s.charAt(s.length() - 1)).toString();
  }

  private char shift(char c, char d) {
    return (char) ((int) c + Integer.parseInt(String.valueOf(d)));
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "a1c1e1";
    String s2 = "a1b2c3d4e";

    System.out.println(new Solution().replaceDigits(s1));
    System.out.println(new Solution().replaceDigits(s2));
  }
}