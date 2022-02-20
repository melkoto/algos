package com.company.string.areOccurrencesEqual;

import java.util.HashMap;

class Solution {
  public boolean areOccurrencesEqual(String s) {
    HashMap<Character, Integer> map = new HashMap<>();

    for (int i = 0; i < s.length(); i++) {
      map.put(s.charAt(i), map.getOrDefault(s.charAt(i), 0) + 1);
    }

    int first = map.get(s.charAt(0));
    for (Character c: map.keySet()) {
      if (map.get(c) != first) return false;
    }
    return true;
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "abacbc";
    String s2 = "aaabb";

    System.out.println(new Solution().areOccurrencesEqual(s1));
    System.out.println(new Solution().areOccurrencesEqual(s2));
  }
}