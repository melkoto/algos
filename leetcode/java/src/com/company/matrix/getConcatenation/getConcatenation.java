package com.company.matrix.getConcatenation;

import java.util.Arrays;

class Solution {
    public int[] getConcatenation(int[] nums) {
        int[] res = new int[nums.length * 2];

        for (int i = 0; i < nums.length; i++) {
            res[i] = nums[i];
            res[nums.length + i] = nums[i];
        }
        return res;
    }
}

class Main {
    public static void main(String[] args) {
        int[] p1 = {1,2,1};
        int[] p2 = {1,3,2,1};
        System.out.println(Arrays.toString(new Solution().getConcatenation(p1)));
        System.out.println(Arrays.toString(new Solution().getConcatenation(p2)));
    }
}
