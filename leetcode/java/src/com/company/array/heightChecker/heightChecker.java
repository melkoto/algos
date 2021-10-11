package com.company.array.heightChecker;

import java.util.Arrays;

class Solution {
  public int heightChecker(int[] heights) {
    int[] s = new int[101];
    int res = 0, j = 0;

    for (int height : heights) {
      s[height]++;
    }

    for (int i = 1; i < 101; i++) {
      while (s[i] > 0) {
        if(heights[j] != i) res++;
        j++;
        s[i]--;
      }
    }

    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] h1 = {1,1,4,2,1,3};
    int[] h2 = {5,1,2,3,4};
    int[] h3 = {1,2,3,4,5};

    System.out.println(new Solution().heightChecker(h1));
    System.out.println(new Solution().heightChecker(h2));
    System.out.println(new Solution().heightChecker(h3));
  }
}