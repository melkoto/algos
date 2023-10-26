from typing import Optional, List

from tree_utils import TreeNode, list_to_tree


class Solution:
    def bst_from_preorder(self, preorder: List[int]) -> Optional[TreeNode]:
        stack = []
        root = TreeNode()


sol = Solution()
print(sol.bst_from_preorder([8, 5, 1, 7, 10, 12]))
print(sol.bst_from_preorder([1, 3]))
