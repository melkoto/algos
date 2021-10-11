package com.company.array.createTargetArray;

import java.util.Arrays;

class Solution {
  public int[] createTargetArray(int[] nums, int[] index) {
    int[] target = new int[nums.length];
    Arrays.fill(target, -1);

    for (int i = 0; i < nums.length; i++) {
      if (target[index[i]] == -1) {
        target[index[i]] = nums[i];
      } else {
        int currNumInTarget = target[index[i]]; // current number in target array
        target[index[i]] = nums[i];

        for (int j = index[i]; j < nums.length - 1; j++) {
          int tempNum = target[j + 1];
          target[j + 1] = currNumInTarget;
          currNumInTarget = tempNum;
        }
      }
    }
    return target;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {0, 1, 2, 3, 4};
    int[] i1 = {0, 1, 2, 2, 1};

    int[] n2 = {1, 2, 3, 4, 0};
    int[] i2 = {0, 1, 2, 3, 0};

    int[] n3 = {1};
    int[] i3 = {0};

    System.out.println(Arrays.toString(new Solution().createTargetArray(n1, i1)));
    System.out.println(Arrays.toString(new Solution().createTargetArray(n2, i2)));
    System.out.println(Arrays.toString(new Solution().createTargetArray(n3, i3)));
  }
}