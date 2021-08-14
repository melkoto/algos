package com.company.matrix.countNegatives;

class Solution {
    public int countNegatives(int[][] grid) {
        int rows = grid.length, cols = grid[0].length,
            res = 0, lastNeg = cols - 1;

        for (int i = 0; i < rows; i++) {
            if (grid[i][0] < 0) {
                res += cols;
                continue;
            }
            if (grid[i][cols - 1] > 0) {
                continue;
            }

            int l = 0, r = lastNeg;

            while (l <= r) {
                int m = l + (r - l) / 2;

                if (grid[i][m] < 0) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
            res += (cols - l);
            lastNeg = l;
        }
        return res;
    }
}

class Main {
    public static void main(String[] args) {
        int[][] p1 = {
                { 4, 3, 2, -1 },
                { 3, 2, 1, -1 },
                { 1, 1, -1, -2 },
                { -1, -1, -2, -3 }
        };
        System.out.println(new Solution().countNegatives(p1));
    }
}
