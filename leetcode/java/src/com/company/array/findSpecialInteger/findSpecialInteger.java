package com.company.array.findSpecialInteger;

class Solution {
  public int findSpecialInteger(int[] arr) {
    int l = Math.round(arr.length / 4) + 1;
    int res = 0, temp = 1;

    if (arr.length == 1) return arr[res];

    for (int i = 1; i < arr.length; i++) {
      if (arr[i] != arr[i - 1]) {
        temp = 1;
      }
      else {
        temp++;
        if (temp >= l) {
          res = arr[i];
          break;
        }
      }
    }

    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] a1 = {1, 2, 2, 6, 6, 6, 6, 7, 10};
    int[] a2 = {1, 1};
    int[] a3 = {1, 2, 3, 3};
    int[] a4 = {1};
    int[] a5 = {1,1,2,2,3,3,3,3};
    int[] a6 = {0,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5};

    System.out.println(new Solution().findSpecialInteger(a1));
    System.out.println(new Solution().findSpecialInteger(a2));
    System.out.println(new Solution().findSpecialInteger(a3));
    System.out.println(new Solution().findSpecialInteger(a4));
    System.out.println(new Solution().findSpecialInteger(a5));
    System.out.println(new Solution().findSpecialInteger(a6));
  }
}