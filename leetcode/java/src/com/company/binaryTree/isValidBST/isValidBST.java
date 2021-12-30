package com.company.binaryTree.isValidBST;

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
    public boolean isValidBST(TreeNode root) {
        return inorderTraversal(root, root.val);
    }

    private boolean inorderTraversal(TreeNode root, int rootVal) {
        if (root == null) return true;

        inorderTraversal(root.left, rootVal);
        if (root.left != null && root.left.val >= root.val) return false;
        if (root.right != null && root.right.val <= root.val) return false;
        inorderTraversal(root.right, rootVal);

        return true;
    }
}
