package com.company.string.arrayStringsAreEqual;

class Solution {
  public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
    StringBuilder w1 = new StringBuilder();
    StringBuilder w2 = new StringBuilder();

    for (String str: word1) {
      w1.append(str);
    }

    for (String str: word2) {
      w2.append(str);
    }
    return w1.toString().equals(w2.toString());
  }
}

class Main {
  public static void main(String[] args) {
    String[] w11 = {"ab", "c"};
    String[] w12 = {"a", "bc"};

    String[] w21 = {"a", "cb"};
    String[] w22 = {"ab", "c"};

    String[] w31 = {"abc", "d", "defg"};
    String[] w32 = {"abcddefg"};

    System.out.println(new Solution().arrayStringsAreEqual(w11, w12));
    System.out.println(new Solution().arrayStringsAreEqual(w21, w22));
    System.out.println(new Solution().arrayStringsAreEqual(w31, w32));
  }
}