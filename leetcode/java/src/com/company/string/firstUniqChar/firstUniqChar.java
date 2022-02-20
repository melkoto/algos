package com.company.string.firstUniqChar;

class Solution {
  public int firstUniqChar(String s) {
    int[] alphabet = new int[26];

    for (char c: s.toCharArray()) {
      alphabet[c - 'a']++;
    }

    for (int i = 0; i < s.length(); i++) {
      if (alphabet[s.charAt(i) - 'a'] == 1) return i;
    }

    return -1;
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "leetcode";
    String s2 = "loveleetcode";
    String s3 = "aabb";

    System.out.println(new Solution().firstUniqChar(s1));
    System.out.println(new Solution().firstUniqChar(s2));
    System.out.println(new Solution().firstUniqChar(s3));
  }
}