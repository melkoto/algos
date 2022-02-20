package com.company.array.fixedPoint;

class Solution {
  public int fixedPoint(int[] arr) {
    int res = -1, l = 0, r = arr.length - 1, mid;

    while (l <= r) {
      mid = (l + r) >>> 1;

      if (mid == arr[mid]) res = mid;
      if (mid <= arr[mid]) r = mid - 1;
      else l = mid + 1;
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] a1 = {-10, -5, 0, 3, 7};
    int[] a2 = {0, 2, 5, 8, 17};
    int[] a3 = {-10, -5, 3, 4, 7, 9};
    int[] a4 = {-10, -5, -2, 0, 4, 5, 6, 7, 8, 9, 10};

    System.out.println(new Solution().fixedPoint(a1));
    System.out.println(new Solution().fixedPoint(a2));
    System.out.println(new Solution().fixedPoint(a3));
    System.out.println(new Solution().fixedPoint(a4));
  }
}