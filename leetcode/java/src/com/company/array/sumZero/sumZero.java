package com.company.array.sumZero;

import java.util.Arrays;

class Solution {
  public int[] sumZero(int n) {
    int[] res = new int[n];
    int sum = 1;

    for (int i = 0; i < n; i++) {
      if (i == n - 1) res[i] = -sum + 1;
      else {
        res[i] = i + 1;
        sum += i + 1;
      }
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int n = (int) Math.pow(10, 7);
    int n1 = 5;
    int n2 = 10;
    int n3 = 2;

    System.out.println(Arrays.toString(new Solution().sumZero(n)));
    System.out.println(Arrays.toString(new Solution().sumZero(n1)));
    System.out.println(Arrays.toString(new Solution().sumZero(n2)));
    System.out.println(Arrays.toString(new Solution().sumZero(n3)));
  }
}