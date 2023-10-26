from typing import List


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


def list_to_linked_list(arr: List[int]) -> ListNode:
    result = ListNode(-1)
    dummy = result

    for num in arr:
        node = ListNode(num)
        dummy.next = node
        dummy = dummy.next

    return result.next


