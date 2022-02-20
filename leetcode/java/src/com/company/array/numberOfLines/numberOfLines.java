package com.company.array.numberOfLines;

import java.util.Arrays;

class Solution {
  public int[] numberOfLines(int[] widths, String s) {
    int lines = 1, pixels = 0;

    for (char c: s.toCharArray()) {
      int w = widths[c - 'a'];
      pixels += w;

      if (pixels > 100) {
        lines++;
        pixels = w;
      }
    }
    return new int[]{lines, pixels};
  }
}

class Main {
  public static void main(String[] args) {
    int[] w1 = {10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10};
    String s1 = "abcdefghijklmnopqrstuvwxyz";

    int[] w2 = {4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10};
    String s2 = "bbbcccdddaaa";

    System.out.println(Arrays.toString(new Solution().numberOfLines(w1, s1)));
    System.out.println(Arrays.toString(new Solution().numberOfLines(w2, s2)));
  }
}