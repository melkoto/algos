package com.company.linkedList.deleteNodes;


class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  public ListNode deleteNodes(ListNode head, int m, int n) {
    return head;
  }
}

class Main {
  public static void main(String[] args) {
    ListNode node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    node.next.next.next.next = new ListNode(5);
    node.next.next.next.next.next = new ListNode(6);
    node.next.next.next.next.next.next = new ListNode(7);
    node.next.next.next.next.next.next.next = new ListNode(8);
    node.next.next.next.next.next.next.next.next = new ListNode(9);
    node.next.next.next.next.next.next.next.next.next = new ListNode(10);
    node.next.next.next.next.next.next.next.next.next.next = new ListNode(11);
    node.next.next.next.next.next.next.next.next.next.next.next = new ListNode(12);
    node.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(13);
    node.next.next.next.next.next.next.next.next.next.next.next.next.next = new ListNode(14);

    System.out.println(new Solution().deleteNodes(node, 2, 3));
  }
}