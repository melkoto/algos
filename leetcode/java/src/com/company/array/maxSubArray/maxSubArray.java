package com.company.array.maxSubArray;

class Solution {
    public int maxSubArray(int[] nums) {
        int max = nums[0], tempMax = nums[0];

        for (int i = 1; i < nums.length; i++) {
            int sum = tempMax + nums[i];

            tempMax = Math.max(nums[i], tempMax+nums[i]);
            max = Math.max(max, tempMax);
        }
        return max;
    }
}

class Main {
    public static void main(String[] args) {
        int[] n1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

        System.out.println(new Solution().maxSubArray(n1));
    }
}
