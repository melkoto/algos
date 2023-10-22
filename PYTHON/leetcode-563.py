from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    def find_tilt(self, root: Optional[TreeNode]) -> int:
        total_tilt = 0

        def dfs(r: Optional[TreeNode]) -> int:
            nonlocal total_tilt

            if not r:
                return 0

            left_sum = dfs(r.left)
            right_sum = dfs(r.right)

            tilt = abs(left_sum - right_sum)
            total_tilt += tilt

            return r.val + left_sum + right_sum

        dfs(root)
        return total_tilt


tree1 = list_to_tree([1, 2, 3])  # 1
tree2 = list_to_tree([4, 2, 9, 3, 5, None, 7])  # 15
tree3 = list_to_tree([21, 7, 14, 1, 1, 2, 2, 3, 3])  # 9

sol = Solution()
print(sol.find_tilt(tree1))
print(sol.find_tilt(tree2))
print(sol.find_tilt(tree3))
