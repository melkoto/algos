package com.company.array.maxProduct;

class Solution {
  public int maxProduct(int[] nums) {
    int fMax = 0, sMax = 0;

    for (int num: nums) {
      if (num > fMax) {
        sMax = fMax;
        fMax = num;
      } else if (num > sMax) {
        sMax = num;
      }
    }
    return (fMax - 1) * (sMax - 1);
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {3,4,5,2};
    int[] n2 = {1,5,4,5};
    int[] n3 = {3,7};

    System.out.println(new Solution().maxProduct(n1));
    System.out.println(new Solution().maxProduct(n2));
    System.out.println(new Solution().maxProduct(n3));
  }
}