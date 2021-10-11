package com.company.math.numberOfSteps;

class Solution {
  public int numberOfSteps(int num) {
    String binaryString = Integer.toBinaryString(num);
    int count = 0;

    for (char c: binaryString.toCharArray()) {
      if (c == '1') count += 2;
      else count += 1;
    }
    return count - 1;
  }
}

class Main {
  public static void main(String[] args) {
    int n1 = 14;
    int n2 = 8;
    int n3 = 123;

    System.out.println(new Solution().numberOfSteps(n1));
    System.out.println(new Solution().numberOfSteps(n2));
    System.out.println(new Solution().numberOfSteps(n3));
  }
}