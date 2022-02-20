package com.company.matrix.findRotation;

import java.util.Arrays;

class Solution {
    public boolean findRotation(int[][] mat, int[][] target) {

        for (int i = 0; i < 4; i++) {
            mat = rotate(mat);
            int res = 0;
            for (int j = 0; j < mat.length; j++) {
                if (Arrays.equals(mat[j], target[j])) res++;
                if (res == mat.length) return true;
            }
            res = 0;
        }
        return false;
    }

    private int[][] rotate(int[][] arr) {
        int[][] res = new int[arr.length][arr[0].length];
        int k = 0;

        for (int i = arr.length - 1; i >= 0; i--) {
            for (int j = 0; j < arr[0].length; j++) {
                res[j][k] = arr[i][j];
            }
            k++;
        }
        return res;
    }
}

class Main {
    public static void main(String[] args) {
        int[][] p1 = {
                {0, 1},
                {1, 0}
        };
        int[][] t1 = {
                {1, 0},
                {0, 1}
        };

        int[][] p2 = {
                {0, 1},
                {1, 1}
        };
        int[][] t2 = {
                {1, 0},
                {0, 1}
        };

        int[][] p3 = {
                {0, 0, 0},
                {0, 1, 0},
                {1, 1, 1}
        };
        int[][] t3 = {
                {1, 1, 1},
                {0, 1, 0},
                {0, 0, 0}
        };

        System.out.println(new Solution().findRotation(p1, t1));
        System.out.println(new Solution().findRotation(p2, t2));
        System.out.println(new Solution().findRotation(p3, t3));
    }
}
