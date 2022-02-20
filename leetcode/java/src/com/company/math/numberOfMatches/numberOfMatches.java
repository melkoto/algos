package com.company.math.numberOfMatches;

class Solution {
  public int numberOfMatches(int n) {
    int countMatches = 0;

    while (n != 1) {
      if (n % 2 == 0) {
        countMatches += n / 2;
        n /= 2;
      } else {
        countMatches += (n - 1) / 2;
        n = ((n - 1) / 2) + 1;
      }
    }

    return countMatches;
  }
}

class Main {
  public static void main(String[] args) {
    int n1 = 7;
    int n2 = 14;

    System.out.println(new Solution().numberOfMatches(n1));
    System.out.println(new Solution().numberOfMatches(n2));
  }
}