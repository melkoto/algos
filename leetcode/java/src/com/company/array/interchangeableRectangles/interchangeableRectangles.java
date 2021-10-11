package com.company.array.interchangeableRectangles;

import javax.swing.*;
import java.util.HashMap;

class Solution {
  public long interchangeableRectangles(int[][] rectangles) {
    HashMap<String, Integer> s = new HashMap<>();
    long res = 0;

    for (int i = 0; i < rectangles.length; i++) {
      int a = rectangles[i][0];
      int b = rectangles[i][1];
      int d = gcd(a,b);

      a = a/d;
      b = b/d;

      String t = "";
      t += Integer.toString(a);
      t += Integer.toString(b);

      s.merge(t, 1, Integer::sum);
    }

    for (String ss: s.keySet()) {
      if (s.get(ss) > res) res = s.get(ss);
    }
    System.out.println(5^6);
    System.out.println("XOR");
    return res;
  }

  private int gcd(int a, int b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }
}

class Main {
  public static void main(String[] args) {
    int[][] r1 = {{4, 8}, {2, 5}, {3, 6}, {4, 5}, {7, 8}, {10, 20}, {15, 30}};
    int[][] r2 = {{4, 5}, {7, 8}};

    System.out.println(new Solution().interchangeableRectangles(r1));
    System.out.println(new Solution().interchangeableRectangles(r2));
  }
}
// 101
// 110
// 100