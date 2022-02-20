package com.company.binaryTree.isUnivalTree;

import java.util.ArrayDeque;
import java.util.Deque;

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
  public boolean isUnivalTree(TreeNode root) {
    int value = root.val;

    Deque<TreeNode> stack = new ArrayDeque<>();
    TreeNode curr = root;

    while (curr != null || !stack.isEmpty()) {
      while (curr != null) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      if (curr.val != value) return false;
      curr = curr.right;
    }

    return true;
  }
}

class Main {
  public static void main(String[] args) {
    TreeNode r = new TreeNode(1);
    r.left = new TreeNode(1);
    r.right = new TreeNode(1);
    r.left.left = new TreeNode(1);
    r.left.right = new TreeNode(1);
    r.right.right = new TreeNode(1);

    TreeNode r1 = new TreeNode(2);
    r1.left = new TreeNode(2);
    r1.right = new TreeNode(2);
    r1.left.left = new TreeNode(5);
    r1.left.right = new TreeNode(2);
    System.out.println(new Solution().isUnivalTree(r));
    System.out.println(new Solution().isUnivalTree(r1));
  }
}