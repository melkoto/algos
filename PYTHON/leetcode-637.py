import collections
from typing import Optional, List

from tree_utils import TreeNode, list_to_tree


class Solution:
    def average_of_levels(self, root: Optional[TreeNode]) -> List[float]:

        queue = collections.deque([root])

        result = []

        while queue:
            level_depth = len(queue)
            curr_sum = 0

            for i in range(level_depth):
                node = queue.popleft()
                curr_sum += node.val

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

            result.append(curr_sum / level_depth)

        return result


tree1 = list_to_tree([3, 9, 20, None, None, 15, 7])
tree2 = list_to_tree([3, 9, 20, 15, 7])

sol = Solution()
print(sol.average_of_levels(tree1))
print(sol.average_of_levels(tree2))
