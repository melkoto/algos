package com.company.string.uniqueMorseRepresentations;

import java.util.HashSet;
import java.util.Set;

class Solution {
  public int uniqueMorseRepresentations(String[] words) {
    String[] morse = {".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."};
    Set<String> set = new HashSet<>();

    for (String word: words) {
      StringBuilder temp = new StringBuilder();
      for (char l: word.toCharArray()) {
        temp.append(morse[l - 'a']);
      }
      set.add(temp.toString());
    }

    return set.size();
  }
}

class Main {
  public static void main(String[] args) {
    String[] w1 = {"gin", "zen", "gig", "msg"};
    String[] w2 = {"a"};

    System.out.println(new Solution().uniqueMorseRepresentations(w1));
    System.out.println(new Solution().uniqueMorseRepresentations(w2));
  }
}