package com.company.string.numJewelsInStones;

import java.util.Arrays;

class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int res = 0;

        for (int i = 0; i < stones.length(); i++) {
            if (jewels.indexOf(stones.charAt(i)) >= 0) res++;
        }

        return res;
    }
}

class Main {
    public static void main(String[] args) {
        String jewels = "aA";
        String stones = "aAAbbbb";
        System.out.println(new Solution().numJewelsInStones(jewels, stones));
    }
}