/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * function ListNode(val, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverse(head) {
  let prev = null

  while (head) {
    let temp = head.next
    head.next = prev
    prev = head
    head = temp
  }
  return prev
}
