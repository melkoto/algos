from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    # TODO solve in november
    def merge_trees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        pass


tree11 = list_to_tree([1, 3, 2, 5])
tree12 = list_to_tree([2, 1, 3, None, 4, None, 7])

tree21 = list_to_tree([1])
tree22 = list_to_tree([1, 2])

sol = Solution()
print(sol.merge_trees(tree11, tree12))  # [3,4,5,5,4,null,7]
print(sol.merge_trees(tree21, tree22))  # [2,2]
