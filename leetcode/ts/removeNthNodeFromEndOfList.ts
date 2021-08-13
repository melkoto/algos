// Решение https://www.youtube.com/watch?v=LXp3TiwULPE&t=320s
import { ListNode } from "./listNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy = new ListNode(0);
  dummy.next = head;

  let p1: ListNode | null = dummy;
  let p2: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    if (p2) p2 = p2.next;
  }

  while (p2) {
    p1 = p1!.next;
    p2 = p2.next;
  }

  p1!.next = p1!.next!.next;
  return dummy.next;
}

removeNthFromEnd(
  {
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: { val: 4, next: { val: 5, next: null } } },
    },
  },
  2
);
