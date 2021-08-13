// Решение https://www.youtube.com/watch?v=O-8iKAz0R88
import { ListNode } from "./listNode";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 1) return lists[0];
  if (lists.length === 0) return null;
  let head = joinLists(lists[0], lists[1]);

  for (let i = 2; i < lists.length; i++) {
    head = joinLists(head, lists[i]);
  }
  return head;
}

function joinLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummyNode = new ListNode(0);
  let result = dummyNode;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      dummyNode.next = l1;
      dummyNode = dummyNode.next;
      l1 = l1.next;
    } else {
      dummyNode.next = l2;
      dummyNode = dummyNode.next;
      l2 = l2.next;
    }
  }

  l1 === null ? (dummyNode.next = l2) : (dummyNode.next = l1);
  return result.next;
}

mergeKLists([
  { val: 2, next: { val: 4, next: { val: 6, next: null } } },
  { val: 1, next: { val: 3, next: { val: 5, next: null } } },
  { val: 2, next: { val: 6, next: null } },
]);
