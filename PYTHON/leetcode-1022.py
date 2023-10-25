from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    def sum_root_to_leaf(self, root: Optional[TreeNode]) -> int:
        pass
        def dfs(r: TreeNode, curr_num: int):
            pass


tree1 = list_to_tree([1, 0, 1, 0, 1, 0, 1])
tree2 = list_to_tree([0])

sol = Solution()
print(sol.sum_root_to_leaf(tree1))  # 22
print(sol.sum_root_to_leaf(tree2))  # 0
