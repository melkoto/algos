// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

function Node(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let o = new Node(1) //?
let o1 = new Node(2) //?
let o3 = new Node(3) //?
o.next = o1
o1.next = o3
console.log(o)

const deleteDuplicates = function(head) {
    let currNode = head

    while (currNode !== null && currNode.next !== null) {
        if (currNode.val === currNode.next.val) {
            currNode.next = currNode.next.next
        } else {
            currNode = currNode.next
        }
    }
    return head
};
