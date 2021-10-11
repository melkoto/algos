package com.company.math.finalValueAfterOperations;

class Solution {
  public int finalValueAfterOperations(String[] operations) {
    int res = 0;

    for (String s: operations) {
      if (s.charAt(0) == '-' || s.charAt(s.length() - 1) == '-') res--;
      else res++;
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    String[] o1 = {"--X","X++","X++"};
    String[] o2 = {"++X","++X","X++"};
    String[] o3 = {"X++","++X","--X","X--"};

    System.out.println(new Solution().finalValueAfterOperations(o1));
    System.out.println(new Solution().finalValueAfterOperations(o2));
    System.out.println(new Solution().finalValueAfterOperations(o3));
  }
}