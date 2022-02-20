package com.company.array.countKDifference;

import java.util.HashMap;

class Solution {
  public int countKDifference(int[] nums, int k) {
    HashMap<Integer, Integer> s = new HashMap<>();
    int res = 0;

    for (int num: nums) {
      s.put(num, s.getOrDefault(num, 0) + 1);
      int diff = s.getOrDefault(num - k, 0) + s.getOrDefault(num + k, 0);
      res += diff;
    }

    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {1,2,2,1};
    int k = 1;

    int[] n2 = {1,3};
    int k2 = 3;

    int[] n3 = {3,2,1,5,4};
    int k3 = 2;

    System.out.println(new Solution().countKDifference(n1, k));
    System.out.println(new Solution().countKDifference(n2, k2));
    System.out.println(new Solution().countKDifference(n3, k3));

  }
}