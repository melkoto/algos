// Решение https://youtu.be/P_b1_En6098
import { ListNode } from './listNode';

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;

  while (curr) {
    let nextCurr = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextCurr;
  }

  return prev;
}

reverseList({
  val: 1,
  next: {
    val: 2,
    next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
  },
});
