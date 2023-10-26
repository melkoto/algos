from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    # TODO solve in november
    def average_of_subtree(self, root: Optional[TreeNode]) -> int:
        result = 0

        def dfs(r: TreeNode):
            nonlocal result

            if not r:
                return 0, 0

            left_sum, left_count = dfs(r.left)
            right_sum, right_count = dfs(r.right)

            _sum = left_sum + right_sum + r.val
            count = left_count + right_count + 1

            if r.val == _sum // count:
                result += 1

            return _sum, count

        dfs(root)

        return result


tree = list_to_tree([4, 8, 5, 0, 1, None, 6])
sol = Solution()
print(sol.average_of_subtree(tree))
