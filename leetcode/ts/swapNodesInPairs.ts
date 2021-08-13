// Решение https://www.youtube.com/watch?v=rDISkApbqeM

import { ListNode } from './listNode';

function swapPairs(head: ListNode | null): ListNode | null {
  // let dummy = new ListNode(0);
  // dummy.next = head;
  let dummy = new ListNode(0, head);

  let previousNode = dummy;
  let currentNode = head;

  while (currentNode && currentNode.next) {
    let nextTwoNodes = currentNode.next.next;
    let nextNode = currentNode.next;

    nextNode.next = currentNode;
    currentNode.next = nextTwoNodes;
    previousNode.next = nextNode;

    previousNode = currentNode;
    currentNode = nextTwoNodes;
  }

  return dummy.next;
}

swapPairs({
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
});
