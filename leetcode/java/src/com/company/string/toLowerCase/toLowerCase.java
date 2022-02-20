package com.company.string.toLowerCase;

class Solution {
  public String toLowerCase(String s) {
    StringBuilder res = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
      char letter = s.charAt(i);
      if (isCapitalLetter(letter)) {
        res.append(Character.toChars(letter + 32));
      } else {
        res.append(letter);
      }
    }
    return res.toString();
  }

  public boolean isCapitalLetter(char letter) {
    return letter >= 'A' && letter <= 'Z';
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "Hello";
    String s2 = "hello";
    String s3 = "LOVELY";

    System.out.println(new Solution().toLowerCase(s1));
    System.out.println(new Solution().toLowerCase(s2));
    System.out.println(new Solution().toLowerCase(s3));
  }
}