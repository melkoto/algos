package com.company.binaryTree.getLonelyNodes;

import com.sun.source.tree.Tree;

import java.awt.event.TextEvent;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
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
//    public List<Integer> getLonelyNodes(TreeNode root) {
//        List<Integer> res = new ArrayList<>();
//        Stack<TreeNode> s = new Stack<>();
//        s.push(root);
//
//        if (root == null) return res;
//
//        while (!s.isEmpty()) {
//            TreeNode curr = s.pop();
//
//            if (curr.left != null) {
//                s.push(curr.left);
//                if (curr.right == null) {
//                    res.add(curr.left.val);
//                }
//            }
//
//            if (curr.right != null) {
//                s.push(curr.right);
//                if (curr.left == null) {
//                    res.add(curr.right.val);
//                }
//            }
//        }
//        return res;
//    }
//}

class Solution {
    private List<Integer> res = new ArrayList<>();
    public List<Integer> getLonelyNodes(TreeNode root) {
        help(root, false);
        return res;
    }

    private void help(TreeNode root, boolean isAlone) {
       if (root == null) return;

       help(root.left, root.right == null);
        if (isAlone) res.add(root.val);
       help(root.right, root.left == null);
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