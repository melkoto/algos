package com.company.string.reversePrefix;

class Solution {
  public String reversePrefix(String word, char ch) {
    StringBuilder res = new StringBuilder();
    StringBuilder temp = new StringBuilder();
    boolean isInString = false;

    for (int i = 0; i < word.length(); i++) {
      if (word.charAt(i) != ch) {
        temp.append(word.charAt(i));
      } else {
        temp.append(word.charAt(i));
        isInString = true;
        break;
      }
    }

    res.append(temp.reverse());

    for (int i = temp.length(); i < word.length(); i++) {
      res.append(word.charAt(i));
    }
    return isInString ? res.toString() : word;
  }
}

class Main {
  public static void main(String[] args) {
    String w1 = "abcdefd";
    char c1 = 'd';

    String w2 = "abcd";
    char c2 = 'z';

    String w3 = "rzwuktxcjfpamlonbgyieqdvhs";
    char c3 = 's';

    System.out.println(new Solution().reversePrefix(w1, c1));
    System.out.println(new Solution().reversePrefix(w2, c2));
    System.out.println(new Solution().reversePrefix(w3, c3));
  }
}