package com.company.binaryTree.leafSimilar;

import java.util.*;

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
  public boolean leafSimilar(TreeNode root1, TreeNode root2) {
    List<Integer> a1 = new ArrayList<>();
    List<Integer> a2 = new ArrayList<>();
    return findLeaf(root1, a1).equals(findLeaf(root2, a2));

  }

  private List<Integer> findLeaf(TreeNode root, List<Integer> res) {
    Deque<TreeNode> stack = new ArrayDeque<>();
    TreeNode curr = root;
    while (curr != null || !stack.isEmpty()) {
      while (curr != null) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      if (curr.left == null && curr.right == null) {
        res.add(curr.val);
      }
      curr = curr.right;
    }
    return res;
  }
}

class Main {
  public static void main(String[] args) {
    TreeNode r1 = new TreeNode(3);
    r1.left = new TreeNode(5);
    r1.right = new TreeNode(1);
    r1.left.left = new TreeNode(6);
    r1.left.right = new TreeNode(2);
    r1.right.left = new TreeNode(9);
    r1.right.right = new TreeNode(8);
    r1.left.right.left = new TreeNode(7);
    r1.left.right.right = new TreeNode(4);

    TreeNode r2 = new TreeNode(3);
    r2.left = new TreeNode(5);
    r2.right = new TreeNode(1);
    r2.left.left = new TreeNode(6);
    r2.left.right = new TreeNode(7);
    r2.right.left = new TreeNode(4);
    r2.right.right = new TreeNode(2);
    r2.right.right.left = new TreeNode(9);
    r2.right.right.right = new TreeNode(8);

    TreeNode r3 = new TreeNode(1);
    r3.left = new TreeNode(2);
    r3.right = new TreeNode(3);

    TreeNode r4 = new TreeNode(1);
    r4.left = new TreeNode(3);
    r4.right = new TreeNode(2);

    System.out.println(new Solution().leafSimilar(r1, r2));
    System.out.println(new Solution().leafSimilar(r3, r4));
  }
}