package com.company.string.removeVowels;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public String removeVowels(String s) {
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        String res = "";

        for (int i = 0; i < s.length(); i++) {
            if (!vowels.contains(s.charAt(i))) res += s.charAt(i);
        }
        return res;
    }
}

class Main {
    public static void main(String[] args) {
        String p1 = "leetcodeisacommunityforcoders";
        System.out.println(new Solution().removeVowels(p1));
    }
}