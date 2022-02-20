package com.company.array.busyStudent;

class Solution {
  public int busyStudent(int[] startTime, int[] endTime, int queryTime) {
    int res = 0;

    for (int i = 0; i < startTime.length; i++) {
      if (startTime[i] <= queryTime && endTime[i] >= queryTime) res++;
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    int[] s1 = {1, 2, 3};
    int[] e1 = {3, 2, 7};
    int q1 = 4;

    int[] s2 = {4};
    int[] e2 = {4};
    int q2 = 4;

    int[] s3 = {4};
    int[] e3 = {4};
    int q3 = 5;

    int[] s4 = {1, 1, 1, 1};
    int[] e4 = {1, 3, 2, 4};
    int q4 = 7;

    int[] s5 = {9, 8, 7, 6, 5, 4, 3, 2, 1};
    int[] e5 = {10, 10, 10, 10, 10, 10, 10, 10, 10};
    int q5 = 5;

    System.out.println(new Solution().busyStudent(s1, e1, q1));
    System.out.println(new Solution().busyStudent(s2, e2, q2));
    System.out.println(new Solution().busyStudent(s3, e3, q3));
    System.out.println(new Solution().busyStudent(s4, e4, q4));
    System.out.println(new Solution().busyStudent(s5, e5, q5));
  }
}