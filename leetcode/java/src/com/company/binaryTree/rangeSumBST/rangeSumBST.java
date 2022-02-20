package com.company.binaryTree.rangeSumBST;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

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

//class Solution {
//    public int rangeSumBST(TreeNode root, int low, int high) {
//        if (root == null) return  0;
//
//        Stack<TreeNode> stack = new Stack<>();
//        stack.push(root);
//        int sum = 0;
//
//        while (!stack.isEmpty()) {
//            TreeNode node = stack.pop();
//
//            if (node != null) {
//                if (node.val >= low && node.val <= high) {
//                    sum += node.val;
//                }
//                if (low < node.val) {
//                    stack.push(node.left);
//                }
//                if (high > node.val) {
//                    stack.push(node.right);
//                }
//            }
//        }
//        return sum;
//    }
//}

class Solution {
    int sum;
    public int rangeSumBST(TreeNode root, int low, int high) {
        sum = 0;
        dfs(root, low, high);
        return sum;
    }

    public void dfs(TreeNode node, int l, int h) {
        if (node != null) {
            if (node.val >= l && node.val <= h) {
                sum += node.val;
            }
            if (l < node.val) {
                dfs(node.left, l, h);
            }
            if (h > node.val) {
                dfs(node.right, l, h);
            }
        }
    }
}

class Main {
    public static void main(String[] args) {
        TreeNode r = new TreeNode(10);
        r.left = new TreeNode(5);
        r.right = new TreeNode(15);

        r.left.left = new TreeNode(3);
        r.left.right = new TreeNode(7);

        r.right.right = new TreeNode(18);


        System.out.println(new Solution().rangeSumBST(r, 7, 12));
    }
}
