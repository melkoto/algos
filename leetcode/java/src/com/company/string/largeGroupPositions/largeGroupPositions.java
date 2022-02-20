package com.company.string.largeGroupPositions;
import java.util.*;

class Solution {
  public List<List<Integer>> largeGroupPositions(String s) {
    List<List<Integer>> res = new ArrayList<>();
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "abbxxxxzyy";
    String s2 = "abc";
    String s3 = "abcdddeeeeaabbbcd";
    String s4 = "aba";

    System.out.println(new Solution().largeGroupPositions(s1));
    System.out.println(new Solution().largeGroupPositions(s2));
    System.out.println(new Solution().largeGroupPositions(s3));
    System.out.println(new Solution().largeGroupPositions(s4));

  }
}