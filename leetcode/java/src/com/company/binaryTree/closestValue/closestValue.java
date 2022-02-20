package com.company.binaryTree.closestValue;

import java.util.Stack;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    int res = 0;
    public int closestValue(TreeNode root, double target) {
        dfs(root, Integer.MAX_VALUE, target, res);
        return res;
    }

    private void dfs(TreeNode root, double temp, double t, int res) {
        if (root == null) return;

        if (Math.abs(root.val - t) < temp) {
            temp = Math.abs(root.val - t);
            this.res = root.val;
        }

        if (t < root.val) dfs(root.left, temp, t, this.res);
        if (t > root.val) dfs(root.right, temp, t, this.res);
    }

}

class Main {
    public static void main(String[] args) {
//        TreeNode root = new TreeNode(4);
//        root.left = new TreeNode(2);
//        root.right = new TreeNode(5);
//
//        root.left.left = new TreeNode(1);
//        root.left.right = new TreeNode(3);
//        double target1 = 3.714286;

        TreeNode root = new TreeNode(1);
        root.right = new TreeNode(2);
        double target = 3.714286;

        System.out.println(new Solution().closestValue(root, target));
    }
}
