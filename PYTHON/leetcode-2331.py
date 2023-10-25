from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    def evaluate_tree(self, root: Optional[TreeNode]) -> bool:
        def dfs(r: TreeNode) -> bool:
            if not r.left and not r.right:
                return False if r.val == 0 else True

            left = dfs(r.left)
            right = dfs(r.right)

            if r.val == 2:
                return left or right
            if r.val == 3:
                return left and right

        return dfs(root)


tree1 = list_to_tree([2, 1, 3, None, None, 0, 1])
tree2 = list_to_tree([0])

sol = Solution()
print(sol.evaluate_tree(tree1))  # true
print(sol.evaluate_tree(tree2))  # false
