package com.company.binaryTree.findSecondMinimumValue;

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
    public int findSecondMinimumValue(TreeNode root) {
        long min1 = Long.MAX_VALUE, min2 = Long.MAX_VALUE;
        Stack<TreeNode> s = new Stack<>();
        TreeNode curr = root;

        while (curr != null || !s.isEmpty()) {
            while (curr != null) {
                s.push(curr);
                curr = curr.left;
            }

            curr = s.pop();
            if (curr.val < min1 && curr.val != min2) {
                min2 = min1;
                min1 = curr.val;
            } else if (curr.val < min2 && curr.val != min1) {
                min2 = curr.val;
            }

            curr = curr.right;
        }
        return (int) min2;
    }
}
