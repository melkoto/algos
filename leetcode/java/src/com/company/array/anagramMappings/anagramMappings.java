package com.company.array.anagramMappings;

import java.util.Arrays;
import java.util.HashMap;

class Solution {
  public int[] anagramMappings(int[] nums1, int[] nums2) {
    HashMap<Integer, Integer> s = new HashMap<>();

    for (int i = 0; i < nums1.length; i++) {
      s.put(nums2[i], i);
    }

    for (int i = 0; i < nums1.length; i++) {
      nums2[i] = s.get(nums1[i]);
    }

    return nums2;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n11 = {12,28,46,32,50};
    int[] n12 = {50,12,32,46,28};

    int[] n21 = {84,46};
    int[] n22 = {46,84};

    System.out.println(Arrays.toString(new Solution().anagramMappings(n11,n12)));
    System.out.println(Arrays.toString(new Solution().anagramMappings(n21, n22)));
  }
}