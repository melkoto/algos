package com.company.math.subtractProductAndSum;

class Solution {
  public int subtractProductAndSum(int n) {
    String num = Integer.toString(n);
    int mult = Character.getNumericValue(num.charAt(0)), sum = Character.getNumericValue(num.charAt(0));

    for (int i = 1; i < num.length(); i++) {
      mult *= Character.getNumericValue(num.charAt(i));
      sum += Character.getNumericValue(num.charAt(i));
    }
    return mult - sum;
  }
}

class Main {
  public static void main(String[] args) {
    int n1 = 234;
    int n2 = 4421;

    System.out.println(new Solution().subtractProductAndSum(n1));
    System.out.println(new Solution().subtractProductAndSum(n2));
  }
}