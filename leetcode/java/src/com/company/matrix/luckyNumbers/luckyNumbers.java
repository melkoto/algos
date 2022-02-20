package com.company.matrix.luckyNumbers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<Integer> luckyNumbers (int[][] matrix) {
        List<Integer> res = new ArrayList<>();

        for (int i = 0; i < matrix.length; i++) {
            int min = min(matrix[i]);
            for (int j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] == min && isMax(matrix, matrix[i][j], j)) {
                    res.add(matrix[i][j]);
                }
            }
        }

        return res;
    }

    private int min(int[] row) {
        return Arrays.stream(row).min().getAsInt();
    }

    private boolean isMax(int[][] matrix, int c, int ind) {
        for (int[] ints : matrix) {
            for (int j = ind; j <= ind; j++) {
                if (ints[j] > c) return false;
            }
        }
        return true;
    }
}

class Main {
    public static void main(String[] args) {
        int[][] p1 = {{3,7,8},{9,11,13},{15,16,17}};
        int[][] p2 = {{1,10,4,2},{9,3,8,7},{15,16,17,12}};
        int[][] p3 = {{7,8},{1,2}};
        System.out.println(new Solution().luckyNumbers(p1));
        System.out.println(new Solution().luckyNumbers(p2));
        System.out.println(new Solution().luckyNumbers(p3));
    }
}