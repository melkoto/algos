package com.company.binaryTree.getLonelyNodes;

import java.util.ArrayList;
import java.util.List;

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
    private List<Integer> res = new ArrayList<>();
    public List<Integer> getLonelyNodes(TreeNode root) {
        rec(root);
        return res;
    }

    private void rec(TreeNode node) {
        if (node == null) return;

        if (node.left != null && node.right == null) {
            this.res.add(node.left.val);
        }
        if (node.right != null && node.left == null) {
            this.res.add(node.right.val);
        }
        rec(node.left);
        rec(node.right);
    }
}

class Main {
    public static void main(String[] args) {
        TreeNode node = new TreeNode(7);
        node.left = new TreeNode(1);
        node.left.left = new TreeNode(6);

        node.right = new TreeNode(4);
        node.right.left = new TreeNode(5);
        node.right.right = new TreeNode(3);
        node.right.right.right = new TreeNode(2);
        System.out.println(new Solution().getLonelyNodes(node));
    }
}