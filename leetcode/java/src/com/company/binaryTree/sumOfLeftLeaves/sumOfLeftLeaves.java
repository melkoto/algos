package com.company.binaryTree.sumOfLeftLeaves;

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

//class Solution {
//    public int sumOfLeftLeaves(TreeNode root) {
//        int res = 0;
//        Stack<TreeNode> s = new Stack<>();
//        TreeNode curr = root;
//
//        while (curr != null || !s.isEmpty()) {
//            while (curr != null) {
//                s.push(curr);
//                curr = curr.left;
//            }
//
//            curr = s.pop();
//
//            if (curr.left != null && curr.left.left == null && curr.left.right == null) {
//                res += curr.left.val;
//            }
//
//            curr = curr.right;
//        }
//        return res;
//    }
//}

class Solution {
    private int res;
    public int sumOfLeftLeaves(TreeNode root) {
        inorder(root);
        return res;
    }

    private void inorder(TreeNode root) {
        if (root == null) {
            return;
        }

        inorder(root.left);
        if (root.left != null && root.left.left == null && root.left.right == null) {
            this.res += root.left.val;
        }
        inorder(root.right);
    }
}
