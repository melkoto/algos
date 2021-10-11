package com.company.string.judgeCircle;

class Solution {
  public boolean judgeCircle(String moves) {
    int x = 0, y = 0;

    for(char c: moves.toCharArray()) {
      if (c == 'U') y++;
      else if (c == 'D') y--;
      else if (c == 'R') x++;
      else x--;
    }
    return x == 0 && y == 0;
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "UD";
    String s2 = "LL";
    String s3 = "RRDD";
    String s4 = "LDRRLRUULR";

    System.out.println(new Solution().judgeCircle(s1));
    System.out.println(new Solution().judgeCircle(s2));
    System.out.println(new Solution().judgeCircle(s3));
    System.out.println(new Solution().judgeCircle(s4));
  }
}
