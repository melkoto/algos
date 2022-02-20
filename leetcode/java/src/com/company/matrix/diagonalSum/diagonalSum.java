package com.company.matrix.diagonalSum;

class Solution {
    public int diagonalSum(int[][] mat) {
        int left = 0, right = 0, i, j;

        for (i = 0; i < mat.length; i++) {
            left += mat[i][i];
        }

        for (i = 0; i < mat.length; i++) {
            for (j = mat.length - 1 - i; j >= mat.length - 1 - i; j--) {
                if (i != j) {
                    right += mat[i][j];
                }
            }
        }
        return left + right;
    }
}

class Main {
    public static void main(String[] args) {
        int[][] p1 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        int[][] p2 = {{1, 1, 1, 1}, {1, 1, 1, 1}, {1, 1, 1, 1}, {1, 1, 1, 1}};
        int[][] p3 = {{5}};
        System.out.println(new Solution().diagonalSum(p1));
        System.out.println(new Solution().diagonalSum(p2));
        System.out.println(new Solution().diagonalSum(p3));
    }
}
