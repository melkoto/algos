from typing import Optional

from linked_list_utils import ListNode, list_to_linked_list


class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        b_nodes = set()

        while headB:
            b_nodes.add(headB)
            headB = headB.next

        while headA:
            if headA in b_nodes:
                return headA
            headA = headA.next

        return None


ll11 = list_to_linked_list([4, 1, 8, 4, 5])
ll12 = list_to_linked_list([5, 6, 1, 8, 4, 5])
ll21 = list_to_linked_list([1, 9, 1, 2, 4])
ll22 = list_to_linked_list([3, 2, 4])

sol = Solution()
print(sol.getIntersectionNode(ll11, ll12))
print(sol.getIntersectionNode(ll21, ll22))
