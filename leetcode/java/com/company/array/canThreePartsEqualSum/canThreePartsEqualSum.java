package com.company.array.canThreePartsEqualSum;

import java.util.Arrays;

class Solution {
  public boolean canThreePartsEqualSum(int[] arr) {
    int sumArr = Arrays.stream(arr).sum();
    if (sumArr % 3 != 0) return false;
    int target = sumArr / 3, temp = 0, sum = 0;

    for (int num: arr) {
      temp += num;
      if (temp == target) {
        sum++;
        temp = 0;
      }
    }

    return sum >= 3;
  }
}

class Main {
  public static void main(String[] args) {
    int[] a1 = {0,2,1,-6,6,-7,9,1,2,0,1};
    int[] a2 = {0,2,1,-6,6,7,9,-1,2,0,1};
    int[] a3 = {3,3,6,5,-2,2,5,1,-9,4};

    System.out.println(new Solution().canThreePartsEqualSum(a1));
    System.out.println(new Solution().canThreePartsEqualSum(a2));
    System.out.println(new Solution().canThreePartsEqualSum(a3));
  }
}