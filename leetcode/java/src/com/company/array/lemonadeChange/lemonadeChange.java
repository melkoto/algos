package com.company.array.lemonadeChange;

import java.util.HashMap;

class Solution {
  public boolean lemonadeChange(int[] bills) {

    return true;
  }
}

class Main {
  public static void main(String[] args) {
    int[] b1 = {5, 5, 5, 10, 20};
    int[] b2 = {5, 5, 10, 10, 20};
    int[] b3 = {5, 5, 10};
    int[] b4 = {10, 10};
    int[] b5 = {5, 10, 5, 10, 20};

    System.out.println(new Solution().lemonadeChange(b1));
    System.out.println(new Solution().lemonadeChange(b2));
    System.out.println(new Solution().lemonadeChange(b3));
    System.out.println(new Solution().lemonadeChange(b4));
    System.out.println(new Solution().lemonadeChange(b5));
  }
}