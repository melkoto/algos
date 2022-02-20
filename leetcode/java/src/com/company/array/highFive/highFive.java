package com.company.array.highFive;

import java.util.*;

class Solution {
  public int[][] highFive(int[][] items) {
    TreeMap<Integer, List<Integer>> s = new TreeMap<>();

    for (int[] a: items) {
      int id = a[0];
      int score = a[1];

      s.putIfAbsent(id, new ArrayList<Integer>());
      s.get(id).add(score);
    }

    int[][] res = new int[s.size()][2];
    int i = 0;

    for (Integer num: s.keySet()) {
      res[i] = new int[]{num, as(s.get(num))};
      i++;
    }

    return res;
  }

  private int as(List<Integer> a) {
    Collections.sort(a);
    int sum = 0;
    for (int i = a.size() - 1; i >= a.size() - 5; i--) {
      sum += a.get(i);
    }
    return sum / 5;
  }
}

class Main {
  public static void main(String[] args) {
    int[][] i1 = {{1, 91}, {1, 92}, {2, 93}, {2, 97}, {1, 60}, {2, 77}, {1, 65}, {1, 87}, {1, 100}, {2, 100}, {2, 76}};
    int[][] i2 = {{1, 100}, {7, 100}, {1, 100}, {7, 100}, {1, 100}, {7, 100}, {1, 100}, {7, 100}, {1, 100}, {7, 100}};

    System.out.println(Arrays.toString(new Solution().highFive(i1)));
    System.out.println(Arrays.toString(new Solution().highFive(i2)));
  }
}