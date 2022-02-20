package com.company.array.leftMostColumnWithOne;

import java.util.List;

interface BinaryMatrix {
  int get(int row, int col);

  List<Integer> dimensions();
}
class Solution {
  public int leftMostColumnWithOne(BinaryMatrix binaryMatrix) {
    int rows = binaryMatrix.dimensions().get(0);
    int cols = binaryMatrix.dimensions().get(1);
    int leftMostOne = cols;

    for (int row = 0; row < rows; row++) {
      int left = 0, right = cols - 1;
      while (left < right) {
        int mid = left + right >>> 1;

        if (binaryMatrix.get(row, mid) == 0) {
          left = mid + 1;
        } else right = mid;
      }

      if (binaryMatrix.get(row, left) == 1) {
        leftMostOne = Math.min(leftMostOne, left);
      }

    }
    return leftMostOne == cols ? -1 : leftMostOne;
  }
}

