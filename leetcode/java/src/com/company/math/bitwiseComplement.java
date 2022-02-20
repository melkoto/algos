package com.company.math;

class Solution {
  public int bitwiseComplement(int n) {
    if (n == 0) return 1;
    int nRightShift = n;
    int bit = 1;

    while (nRightShift != 0) {
      n ^= bit;
      bit <<= 1;
      nRightShift >>= 1;
    }
    return n;
  }
}

class Main {
  public static void main(String[] args) {
    int n1 = 5;
    int n2 = 7;
    int n3 = 10;

    System.out.println(new Solution().bitwiseComplement(n1));
    System.out.println(new Solution().bitwiseComplement(n2));
    System.out.println(new Solution().bitwiseComplement(n3));
  }
}