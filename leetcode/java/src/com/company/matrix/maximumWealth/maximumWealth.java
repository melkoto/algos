package com.company.matrix.maximumWealth;

class Solution {
    public int maximumWealth(int[][] accounts) {
        int res = 0;

        for (int[] arr: accounts) {
            res = Math.max(res, sum(arr));
        }
        return res;
    }

    private int sum(int[] arr) {
        int res = 0;

        for (int num: arr) {
            res += num;
        }
        return res;
    }
}

class Main {
    public static void main(String[] args) {
        int[][] p1 = {{1,2,3},{3,2,1}};
        int[][] p2 = {{1,5},{7,3},{3,5}};
        int[][] p3 = {{2,8,7},{7,1,3},{1,9,5}};

        System.out.println(new Solution().maximumWealth(p1));
        System.out.println(new Solution().maximumWealth(p2));
        System.out.println(new Solution().maximumWealth(p3));
    }
}
