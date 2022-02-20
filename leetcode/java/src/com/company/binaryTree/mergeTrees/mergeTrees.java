package com.company.binaryTree.mergeTrees;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null) return root1;
        if (root2 == null ) return root2;
        root1.val += root2.val;

        root1.left = mergeTrees(root1.left, root2.left);
        root1.right = mergeTrees(root1.right, root2.right);
        return root1;
    }
}

class Main {
    public static void main(String[] args) {
        TreeNode r1 = new TreeNode(1);
        r1.left = new TreeNode(3);
        r1.left.left = new TreeNode(5);
        r1.right = new TreeNode(2);

        TreeNode r2 = new TreeNode(2);
        r2.left = new TreeNode(1);
        r2.left.right = new TreeNode(4);
        r2.right = new TreeNode(3);
        r2.right.right = new TreeNode(7);

        System.out.println(new Solution().mergeTrees(r1, r2));
    }
}