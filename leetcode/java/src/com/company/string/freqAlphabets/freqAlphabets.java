package com.company.string.freqAlphabets;

class Solution {
  public String freqAlphabets(String s) {
    StringBuilder res = new StringBuilder();

    for (int i = 0; i < s.length(); i++) {
      if (i < s.length() - 2) {
        if (s.charAt(i + 2) == '#') {
          int nums = Integer.parseInt(s.substring(i, i + 2));
          res.append(Character.toString(nums + 'a' - 1));
          i += 2;
        } else {
          int nums = Integer.parseInt(String.valueOf(s.charAt(i)));
          res.append(Character.toString(nums + 'a' - 1));
        }
      } else {
        int nums = Integer.parseInt(String.valueOf(s.charAt(i)));
        res.append(Character.toString(nums + 'a' - 1));
      }
    }
    return res.toString();
  }
}

class Main {
  public static void main(String[] args) {
    String s1 = "10#11#12";
    String s2 = "1326#";
    String s3 = "25#";
    String s4 = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#";

    System.out.println(new Solution().freqAlphabets(s1));
    System.out.println(new Solution().freqAlphabets(s2));
    System.out.println(new Solution().freqAlphabets(s3));
    System.out.println(new Solution().freqAlphabets(s4));
  }
}