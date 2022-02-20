package com.company.binaryTree.sumRootToLeaf;

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
    public int sumRootToLeaf(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        Stack<TreeNode> s = new Stack<>();
        var curr = root;
        var res = 0;

        while (curr != null || !s.isEmpty()) {
            while (curr != null) {
                s.push(curr);
                sb.append(curr.val);
                curr = curr.left;
            }

            if (sb.length() > 3) {
                sb.deleteCharAt(1);
            }

            curr = s.pop();
            curr = curr.right;
            if (curr != null) {
                res += Integer.parseInt(sb.toString(), 2);;
                sb.setLength(sb.length() - 1);
            }
        }
        res += Integer.parseInt(sb.toString(), 2);;

        return res;
    }
}

class Main {
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(0);
        root.right = new TreeNode(1);

        root.left.left = new TreeNode(0);
        root.left.right = new TreeNode(1);

        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(1);

        System.out.println(new Solution().sumRootToLeaf(root));
    }
}
