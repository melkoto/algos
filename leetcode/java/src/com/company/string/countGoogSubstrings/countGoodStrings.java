package com.company.string.countGoogSubstrings;

import java.util.HashSet;
import java.util.Set;

class Solution {
    public int countGoodSubstrings(String s) {
        int count = 0;

        for (int i = 0; i < s.length() - 2; i++) {
            String sub = s.substring(i, i + 3);
            if (isUnique(sub)) count++;
        }

        return count;
    }

    private boolean isUnique(String s) {
        Set<Character> set = new HashSet<>();

        for (int i = 0; i < s.length(); i++) {
            set.add(s.charAt(i));
        }
        return set.size() == s.length();
    }
}

class Main {
    public static void main(String[] args) {
        String p1 = "xyzzaz";
        String p2 = "aababcabc";

        System.out.println(new Solution().countGoodSubstrings(p1));
//        System.out.println(new Solution().countGoodSubstrings(p2));
    }
}