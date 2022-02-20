package com.company.string.maxRepeating;

class Solution {
    public int maxRepeating(String sequence, String word) {
        int count = 0;
        String temp = word;
        while (sequence.contains(temp)) {
            count++;
            temp += word;
        }
        return count;
    }
}

class Main {
    public static void main(String[] args) {
        String p1 = "ababc";
        String t1 = "ab";
        String p2 = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
        String t2 = "aaaba";
        System.out.println(new Solution().maxRepeating(p1, t1));
        System.out.println(new Solution().maxRepeating(p2, t2));
    }
}