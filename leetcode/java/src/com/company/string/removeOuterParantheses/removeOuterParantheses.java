package com.company.string.removeOuterParantheses;

import java.util.ArrayDeque;
import java.util.Deque;

class Solution {
  public String removeOuterParentheses(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    StringBuilder res = new StringBuilder();

    for (char c: s.toCharArray()) {
      if (c == '(') {
        stack.push(c);
      }

      if (stack.size() > 1) {
        res.append(c);
      }

      if (c == ')') {
        stack.pop();
      }
    }
    return res.toString();
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "(()())(())";
    String s2 = "(()())(())(()(()))";
    String s3 = "()()";

    System.out.println(new Solution().removeOuterParentheses(s1));
    System.out.println(new Solution().removeOuterParentheses(s2));
    System.out.println(new Solution().removeOuterParentheses(s3));
  }
}