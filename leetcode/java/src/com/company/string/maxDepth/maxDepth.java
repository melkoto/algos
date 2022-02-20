package com.company.string.maxDepth;

import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
  public int maxDepth(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    int depth = 0, tempDepth = 0;

    for (int i = 0; i < s.length(); i++) {
      if (s.charAt(i) == '(') {
        tempDepth++;
        stack.push('(');
      } else if (s.charAt(i) == ')') {
        stack.pop();
        depth = Math.max(depth, tempDepth);
        tempDepth--;
      }

      if (stack.isEmpty()) {
        tempDepth = 0;
      }
    }
    return depth;
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "(1+(2*3)+((8)/4))+1";
    String s2 = "(1)+((2))+(((3)))";
    String s3 = "1+(2*3)/(2-1)";
    String s4 = "1";

    System.out.println(new Solution().maxDepth(s1));
    System.out.println(new Solution().maxDepth(s2));
    System.out.println(new Solution().maxDepth(s3));
    System.out.println(new Solution().maxDepth(s4));
  }
}