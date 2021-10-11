package com.company.math.distributeCandies;

import java.util.Arrays;

class Solution {
  public int[] distributeCandies(int candies, int num_people) {
    return new int[] {1};
  }
}

class Main {
  public static void main(String[] args) {
    int c1 = 7;
    int n1 = 4;

    int c2 = 10;
    int n2 = 3;

    System.out.println(Arrays.toString(new Solution().distributeCandies(n1, c1)));
    System.out.println(Arrays.toString(new Solution().distributeCandies(n2, c2)));
  }
}