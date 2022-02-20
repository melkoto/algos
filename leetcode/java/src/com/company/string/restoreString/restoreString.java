package com.company.string.restoreString;

import java.lang.reflect.Array;
import java.util.Arrays;

class Solution {
    public String restoreString(String s, int[] indices) {
        String[] res = new String[indices.length];


        for (int i = 0; i < indices.length; i++) {
            res[indices[i]] = String.valueOf(s.charAt(i));
        }

        return String.join("", res);
    }
}

class Main {
    public static void main(String[] args) {
        String s = "aaiougrt";
        int[] indices = {4, 0, 2, 6, 7, 3, 1, 5};
        String s1 = "codeleet";
        int[] indices1 = {4, 5, 6, 7, 0, 2, 1, 3};
        System.out.println(new Solution().restoreString(s, indices));
        System.out.println(new Solution().restoreString(s1, indices1));
    }
}