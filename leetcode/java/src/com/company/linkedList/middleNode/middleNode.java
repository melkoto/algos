package com.company.linkedList.middleNode;

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
    public ListNode middleNode(ListNode head) {
        ListNode cur = head;
        int index = 0;

        while (cur != null) {
            index++;
            cur = cur.next;
        }

        cur = head;

        if (index % 2 == 0) {
            index /= 2;
            while (index != 0) {
                cur = cur.next;
                index -= 1;
            }
            return cur;
        }

        index = (int) Math.floor(index / 2);
        while (index != 0) {
            cur = cur.next;
            index -= 1;
        }

        return cur;
    }
}