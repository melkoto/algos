function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let node = new ListNode(1, new ListNode());
node.next = new ListNode(2, new ListNode());
node.next.next = new ListNode(3, new ListNode());
node.next.next.next = new ListNode(4, new ListNode());
node.next.next.next.next = new ListNode(5, null);

console.log(node)
