package com.company.theory.binary;

class Solution {
  public String numberToBinary(double num) throws Exception {
    StringBuilder binary = new StringBuilder();

    while (num > 0) {
      if (binary.length() >= 31)
        throw new Exception("Your variable is bigger than 32 bits");

      // Multiply by 2 in num to check it 1 or 0
      double r = num * 2;
      if (r >= 1) {
        binary.append(1);
        num = r - 1;
      } else {
        binary.append(0);
        num = r;
      }
    }
    System.out.println(binary.toString());
    return binary.toString();
  }
}

// 4 / 2 = 2 // 0
// 2 / 2 = 1 // 0
// 1 / 2 = 0 // 1

class Main {
  public static void main(String... args) throws Exception {
    Solution s = new Solution();
    double num1 = 0.625;
    s.numberToBinary(num1);
  }
}