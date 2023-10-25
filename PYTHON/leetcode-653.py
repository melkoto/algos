from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    def find_target(self, root: Optional[TreeNode], k: int) -> bool:
        diff = set()

        def dfs(r: TreeNode):
            if not r:
                return False

            if abs(k - r.val) in diff:
                return True

            diff.add(r.val)

            return dfs(r.left) or dfs(r.right)

        return dfs(root)


tree1 = list_to_tree([5, 3, 6, 2, 4, None, 7])
tree2 = list_to_tree([5, 3, 6, 2, 4, None, 7])

sol = Solution()
print(sol.find_target(tree1, 9))  # true
print(sol.find_target(tree2, 28))  # false
