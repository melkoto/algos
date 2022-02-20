package com.company.string.isAnagram;

import java.util.HashMap;
import java.util.Map;

class Solution {
  public boolean isAnagram(String s, String t) {
    if (s.length() < t.length() ||s.length() > t.length()) return false;

    int[] al = new int[26];

    for (int i = 0; i < s.length(); i++) {
      al[s.charAt(i) - 'a']++;
      al[t.charAt(i) - 'a']--;
    }

    for (int num: al) {
      if (num != 0) return false;
    }
    return true;
  }
}

class Main {
  public static void main(String[] args) {
    String s11 = "anagram";
    String s12 = "nagaram";

    String s21 = "aacc";
    String s22 = "ccac";

    System.out.println(new Solution().isAnagram(s11, s12));
    System.out.println(new Solution().isAnagram(s21, s22));
  }
}