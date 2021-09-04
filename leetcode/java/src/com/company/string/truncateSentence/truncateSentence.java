package com.company.string.truncateSentence;

class Solution {
  public String truncateSentence(String s, int k) {
    int spaceIndex = 0;
    int spaceCount = 0;

    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == ' ') {
        spaceCount++;

        if (spaceCount == k) {
          spaceIndex = i;
          break;
        }
      }
    }
    if (spaceIndex == 0) return s;
    else return s.substring(0, spaceIndex);
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "Hello how are you Contestant";
    int k1 = 4;

    String s2 = "What is the solution to this problem";
    int k2 = 4;

    String s3 = "chopper is not a tanuki";
    int k3 = 5;

    System.out.println(new Solution().truncateSentence(s1, k1));
    System.out.println(new Solution().truncateSentence(s2, k2));
    System.out.println(new Solution().truncateSentence(s3, k3));
  }
}