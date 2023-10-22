from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    # TODO solve in november
    def average_of_subtree(self, root: Optional[TreeNode]) -> int:
        pass


tree = list_to_tree([4, 8, 5, 0, 1, None, 6])
sol = Solution()
print(sol.average_of_subtree(tree))
