package com.company.array.frequencySort;

import java.util.Arrays;
import java.util.Map;
import java.util.Objects;
import java.util.TreeMap;

class Solution {
  public int[] frequencySort(int[] nums) {
    TreeMap<Integer, Integer> s = new TreeMap<>();

    for (int num: nums) {
      s.put(num, s.getOrDefault(num, 0) + 1);
    }

    return Arrays.stream(nums).boxed()
            .sorted((a,b) -> !Objects.equals(s.get(a), s.get(b)) ? s.get(a) - s.get(b) : b - a)
            .mapToInt(n -> n)
            .toArray();
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {1,1,2,2,2,3}; // [3,1,1,2,2,2]
    int[] n2 = {2,3,1,3,2}; // [1,3,3,2,2]
    int[] n3 = {-1,1,-6,4,5,-6,1,4,1}; // [5,-1,4,4,-6,-6,1,1,1]

    System.out.println(Arrays.toString(new Solution().frequencySort(n1)));
    System.out.println(Arrays.toString(new Solution().frequencySort(n2)));
    System.out.println(Arrays.toString(new Solution().frequencySort(n3)));
  }
}