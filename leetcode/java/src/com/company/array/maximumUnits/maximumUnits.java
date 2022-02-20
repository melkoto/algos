package com.company.array.maximumUnits;

import java.util.Arrays;

class Solution {
  public int maximumUnits(int[][] boxTypes, int truckSize) {
    Arrays.sort(boxTypes, (a, b) -> b[1] - a[1]);
    int maxUnits = 0;

    for (int[] boxType: boxTypes) {
      int numberOfBoxes = boxType[0];
      int numberOfUnitsPerBox = boxType[1];

      if (truckSize >= numberOfBoxes) {
        maxUnits += (numberOfBoxes * numberOfUnitsPerBox);
        truckSize -= numberOfBoxes;
      } else {
        maxUnits += (truckSize * numberOfUnitsPerBox);
        break;
      }
    }
    return maxUnits;
  }
}

class Main {
  public static void main(String[] args) {
    int[][] b1 = {{1, 3}, {2, 2}, {3, 1}};
    int t1 = 4;

    int[][] b2 = {{5, 10}, {2, 5}, {4, 7}, {3, 9}};
    int t2 = 10;

    System.out.println(new Solution().maximumUnits(b1, t1));
    System.out.println(new Solution().maximumUnits(b2, t2));
  }
}