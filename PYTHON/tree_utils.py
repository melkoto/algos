from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def list_to_tree(arr: List[Optional[int]], index: int = 0) -> Optional[TreeNode]:
    if index >= len(arr) or arr[index] is None:
        return None

    node = TreeNode(arr[index])
    node.left = list_to_tree(arr, 2 * index + 1)
    node.right = list_to_tree(arr, 2 * index + 2)
    return node
