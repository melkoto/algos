package com.company.array.searchMatrix;

import java.util.Arrays;

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int findArr = bs(matrix, target);
        if (findArr == -1) return false;

        int[] currArr = matrix[findArr];
        int left = 0, right = currArr.length - 1, mid;

        while (left <= right) {
            mid = left + right >>> 1;

            if (currArr[mid] == target) return true;
            else if (currArr[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return false;
    }

    private int bs(int[][] arr, int target) {
        int left = 0, right = arr.length - 1, mid;

        while (left <= right) {
            mid = left + right >>> 1;
            int[] currArr = arr[mid];
            int leftBoundary = currArr[0];
            int rightBoundary = currArr[currArr.length - 1];

           if (target >= leftBoundary && target <= rightBoundary) return mid;
           else if (leftBoundary > target) right = mid - 1;
           else if (rightBoundary < target) left = mid + 1;
        }
        return -1;
    }
}

// O(logn * logm)

class Main {
    public static void main(String[] args) {
        int[][] m1 = {{1,3,5,7},{10,11,16,20},{23,30,34,60}};
        int t1 = 23;

        System.out.println(new Solution().searchMatrix(m1, t1));
    }
}
