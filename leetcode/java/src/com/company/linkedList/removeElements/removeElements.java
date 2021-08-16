package com.company.linkedList.removeElements;

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
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummyNode = new ListNode(0, head);

        ListNode prevNode = dummyNode, currNode = head;
        while (currNode != null) {
            if (currNode.val == val) {
                prevNode.next = currNode.next;
            } else {
                prevNode = currNode;
            }
            currNode = currNode.next;
        }
        return dummyNode.next;
    }
}