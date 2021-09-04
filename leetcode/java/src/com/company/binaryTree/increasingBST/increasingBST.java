package com.company.binaryTree.increasingBST;

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

class Solution {
  public TreeNode increasingBST(TreeNode root) {
    TreeNode ans = new TreeNode(-1);
    Stack<TreeNode> stack = new Stack<>();
    TreeNode curr = root;
    TreeNode temp = ans;

    while (curr != null || !stack.isEmpty()) {
      while (curr != null) {
        stack.push(curr);
        curr = curr.left;
      }

      curr = stack.pop();
      temp.right = new TreeNode(curr.val);
      temp = temp.right;
      curr = curr.right;
    }
    return ans.right;
  }
}

class Main {
  public static void main(String[] args) {
    TreeNode root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);

    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(8);

    root.left.left.left = new TreeNode(1);
    root.right.right.left = new TreeNode(7);
    root.right.right.right = new TreeNode(9);

    System.out.println(new Solution().increasingBST(root));
  }
}