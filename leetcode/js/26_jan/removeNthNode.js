function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeElements = function(head, val) {
    let dummyNode = new ListNode(0, head)
    console.log(dummyNode)

    let prevNode = dummyNode
    let curr= head

    while (curr !== null) {
        if (curr.val === val ) {
            prevNode.next = curr.next
        } else {
            prevNode = curr
        }
        curr = curr.next
    }
    return dummyNode.next
};

let r1 = new ListNode(1)
let r2 = new ListNode(2)
let r3 = new ListNode(3)
let r4 = new ListNode(4)
let r5 = new ListNode(5)
let r6 = new ListNode(6)
r1.next = r2
r2.next = r3
r3.next = r4
r4.next = r5
r5.next = r6
console.log(r1)

console.log(removeElements(r1, 2))
