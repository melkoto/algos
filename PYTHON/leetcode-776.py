from typing import Optional, List

from tree_utils import TreeNode, list_to_tree


class Solution:
    def split_bst(self, root: Optional[TreeNode], target: int) -> List[Optional[TreeNode]]:
        pass


tree1 = list_to_tree([4, 2, 6, 1, 3, 5, 7])
tree2 = list_to_tree([1])

sol = Solution()
print(sol.split_bst(tree1, 2))
print(sol.split_bst(tree2, 1))
