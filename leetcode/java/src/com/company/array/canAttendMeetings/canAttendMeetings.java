package com.company.array.canAttendMeetings;

import java.util.Arrays;

class Solution {
  public boolean canAttendMeetings(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

    for (int i = 0; i < intervals.length - 1; i++) {
      int start = intervals[i][0];
      int end = intervals[i][1];
      int nextStart = intervals[i+1][0];

      if (start > nextStart || end > nextStart) return false;
    }
    return true;
  }
}

class Main {
  public static void main(String[] args) {
    int[][] i1 = {{0, 30}, {5, 10}, {15, 20}};
    int[][] i2 = {{7, 10}, {2, 4}};

    System.out.println(new Solution().canAttendMeetings(i1));
    System.out.println(new Solution().canAttendMeetings(i2));
  }
}