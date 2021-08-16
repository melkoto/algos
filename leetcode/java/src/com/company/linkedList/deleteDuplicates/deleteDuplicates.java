package com.company.linkedList.deleteDuplicates;

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
    public ListNode deleteDuplicates(ListNode head) {
        ListNode curNode = head;

        while (curNode.next != null || curNode.next.next != null) {
            if (curNode.val == curNode.next.val) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }

        }
        return head;
    }
}

class Main {
    public static void main(String[] args) {
        ListNode p1 = new ListNode();
        ListNode p2 = new ListNode();
        ListNode p3 = new ListNode();
        p1.val = 1;
        p1.next = p2;

        p2.val = 1;
        p2.next = p3;

        p3.val = 2;
        p3.next = null;
        System.out.println(p1);

        System.out.println(new Solution().deleteDuplicates(p1));
    }
}
