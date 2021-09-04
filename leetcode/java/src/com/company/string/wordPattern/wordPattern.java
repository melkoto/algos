package com.company.string.wordPattern;

import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean wordPattern(String pattern, String s) {
        String[] arr = s.split(" ");
        if (pattern.length() != arr.length) return false;
        Map<Character, String> store = new HashMap<>();

        for (int i = 0; i < pattern.length(); i++) {
            if (store.containsKey(pattern.charAt(i))) {
                if (!store.get(pattern.charAt(i)).equals(arr[i])) {
                    return false;
                }
            } else {
                if (store.containsValue(arr[i])) return false;
            }
            store.put(pattern.charAt(i), arr[i]);
        }
        return true;
    }
}

class Main {
    public static void main(String[] args) {
        String pattern1 = "abba";
        String s1 = "dog cat cat dog";

        String pattern2 = "abba";
        String s2 = "dog cat cat fish";

        String pattern3 = "aaaa";
        String s3 = "dog cat cat dog";

        String pattern4 = "abba";
        String s4 = "dog dog dog dog";

        System.out.println(new Solution().wordPattern(pattern1, s1));
        System.out.println(new Solution().wordPattern(pattern2, s2));
        System.out.println(new Solution().wordPattern(pattern3, s3));
        System.out.println(new Solution().wordPattern(pattern4, s4));
    }
}