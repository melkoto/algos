package com.company.array.repeatedNTimes;

import java.util.Arrays;
import java.util.HashMap;

//class Solution {
//  public int repeatedNTimes(int[] nums) {
//    Arrays.sort(nums);
//    int res = 0;
//
//    for (int i = 1; i < nums.length; i++) {
//      int curr = nums[i];
//      int prev = nums[i-1];
//
//      if (curr == prev) {
//        res = curr;
//      }
//    }
//    return res;
//  }
//}


class Solution {
  public int repeatedNTimes(int[] nums) {
    HashMap<Integer, Integer> s = new HashMap<>();
    int res = 0;

    for (int num: nums) {
      s.put(num, s.getOrDefault(num, 0) + 1);

      if (s.get(num) > 1) res = num;
    }

    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {1,2,3,3};
    int[] n2 = {2,1,2,5,3,2};
    int[] n3 = {5,1,5,2,5,3,5,4};

    System.out.println(new Solution().repeatedNTimes(n1));
    System.out.println(new Solution().repeatedNTimes(n2));
    System.out.println(new Solution().repeatedNTimes(n3));
  }
}