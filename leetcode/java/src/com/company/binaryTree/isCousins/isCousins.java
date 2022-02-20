package com.company.binaryTree.isCousins;

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
  public boolean isCousins(TreeNode root, int x, int y) {
    return true;
  }
}

class Main {
  public static void main(String[] args) {
    TreeNode r1 = new TreeNode(1);
    r1.left = new TreeNode(2);
    r1.right = new TreeNode(3);
    r1.left.left = new TreeNode(4);

    TreeNode r2 = new TreeNode(1);
    r2.left = new TreeNode(2);
    r2.right = new TreeNode(3);
    r2.left.right = new TreeNode(4);
    r2.right.right = new TreeNode(5);

    TreeNode r3 = new TreeNode(1);
    r3.left = new TreeNode(2);
    r3.right = new TreeNode(3);
    r2.left.right = new TreeNode(4);

    System.out.println(new Solution().isCousins(r1, 4, 3));
    System.out.println(new Solution().isCousins(r2, 5, 4));
    System.out.println(new Solution().isCousins(r3, 2, 3));
  }
}