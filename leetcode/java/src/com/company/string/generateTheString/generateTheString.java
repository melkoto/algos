package com.company.string.generateTheString;

class Solution {
  public String generateTheString(int n) {
    StringBuilder res = new StringBuilder();
    char a = 'a';
    char b = 'b';

    if (n % 2 == 1) {
      for (int i = 0; i < n; i++) {
        res.append(a);
      }
    } else {
      for (int i = 0; i < n - 1; i++) {
        res.append(a);
      }
      res.append(b);
    }
    return res.toString();
  }
}

class Main {
  public static void main(String[] args) {
    int n1 = 4;
    int n2 = 2;
    int n3 = 7;

    System.out.println(new Solution().generateTheString(n1));
    System.out.println(new Solution().generateTheString(n2));
    System.out.println(new Solution().generateTheString(n3));
  }
}