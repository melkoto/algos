package com.company.string.numOfStrings;

class Solution {
  public int numOfStrings(String[] patterns, String word) {
    int res = 0;

    for (int i = 0; i < patterns.length; i++) {
      if (word.contains(patterns[i])) res++;
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    String[] p1 = {"a","abc","bc","d"};
    String w1 = "abc";

    String[] p2 = {"a","b","c"};
    String w2 = "aaaaabbbbb";

    String[] p3 = {"a","a","a"};
    String w3 = "ab";

    System.out.println(new Solution().numOfStrings(p1, w1));
    System.out.println(new Solution().numOfStrings(p2, w2));
    System.out.println(new Solution().numOfStrings(p3, w3));
  }
}