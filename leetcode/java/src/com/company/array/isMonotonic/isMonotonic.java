package com.company.array.isMonotonic;

class Solution {
  public boolean isMonotonic(int[] nums) {
    boolean increasing = true;
    boolean decreasing = true;

    for (int i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i+1]) increasing = false;
      if (nums[i] < nums[i+1]) decreasing = false;
    }

    return increasing || decreasing;
  }
}

class Main {
  public static void main(String[] args) {
    int[] n1 = {1,2,2,3};
    int[] n2 = {6,5,4,4};
    int[] n3 = {1,3,2};
    int[] n4 = {1,2,4,5};
    int[] n5 = {1,1,1};

  }
}