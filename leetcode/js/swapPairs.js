function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const swapPairs = function(head) {
    let dn = new ListNode(-1, head) // dn - dummy node
    let curr = dn

    while (curr.next && curr.next.next) {
        let node1 = curr.next
        let node2 = curr.next.next

        curr.next = node2
        node1.next = node2.next
        node2.next = node1
        curr = node1
    }

    return dn.next
};


let node = new ListNode(1)
node.next = new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(4)
console.log(swapPairs(node))
