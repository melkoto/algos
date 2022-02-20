package com.company.matrix.numSpecial;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int numSpecial(int[][] mat) {
        int res = 0, m = mat.length, n = mat[0].length;
        int[] row = new int[m], col = new int[n];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 1) {
                    row[i]++;
                    col[j]++;
                }
            }
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 1 && row[i] == 1 && col[j] == 1) res++;
            }
        }

        return res;
    }
}

class Main {
    public static void main(String[] args) {
        int[][] p1 = {
                {1, 0, 0},
                {0, 0, 1},
                {1, 0, 0}
        };
        int[][] p2 = {
                {1, 0, 0},
                {0, 1, 0},
                {0, 0, 1}
        };
        int[][] p3 = {
                {0, 0, 0, 1},
                {1, 0, 0, 0},
                {0, 1, 1, 0},
                {0, 0, 0, 0}
        };
        int[][] p4 = {
                {0, 0, 0, 0, 0},
                {1, 0, 0, 0, 0},
                {0, 1, 0, 0, 0},
                {0, 0, 1, 0, 0},
                {0, 0, 0, 1, 1}
        };

        System.out.println(new Solution().numSpecial(p1));
        System.out.println(new Solution().numSpecial(p2));
        System.out.println(new Solution().numSpecial(p3));
        System.out.println(new Solution().numSpecial(p4));
    }
}
