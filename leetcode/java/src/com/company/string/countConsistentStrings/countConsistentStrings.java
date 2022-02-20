package com.company.string.countConsistentStrings;

import java.util.HashSet;
import java.util.Set;

class Solution {
  public int countConsistentStrings(String allowed, String[] words) {
    Set<Character> set = new HashSet<>();
    int res = 0;

    for (char letter: allowed.toCharArray()) {
      set.add(letter);
    }

    for (String word: words) {
      int temp = 0;
      for (char letter: word.toCharArray()) {
        if (set.contains(letter)) temp++;
        if (temp == word.length()) res++;
      }
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    String allowed1 = "ab";
    String[] words1 = {"ad","bd","aaab","baa","badab"};

    String allowed2 = "abc";
    String[] words2 = {"a","b","c","ab","ac","bc","abc"};

    String allowed3 = "cad";
    String[] words3 = {"cc","acd","b","ba","bac","bad","ac","d"};

    System.out.println(new Solution().countConsistentStrings(allowed1, words1));
    System.out.println(new Solution().countConsistentStrings(allowed2, words2));
    System.out.println(new Solution().countConsistentStrings(allowed3, words3));
  }
}