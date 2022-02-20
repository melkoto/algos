package com.company.matrix.isSubsequence;

class Solution {
    public boolean isSubsequence(String s, String t) {
        if (s.length() > t.length()) return false;
        int p = 0, count = 0;

        for (int i = 0; i < s.length(); i++) {
           for (int j = p; j < t.length(); j++) {
               if (s.charAt(i) != t.charAt(j)) continue;
               p = ++j;
               count++;
               break;
           }
        }
        return count == s.length();
    }
}

class Main {
    public static void main(String[] args) {
        String s1 = "abc";
        String t1 = "ahbgdc";

        String s2 = "axc";
        String t2 = "ahbgdc";

        System.out.println(new Solution().isSubsequence(s1, t1));
        System.out.println(new Solution().isSubsequence(s2, t2));
    }
}
