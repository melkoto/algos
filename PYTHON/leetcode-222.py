from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    count = 0

    def count_nodes(self, root: Optional[TreeNode]) -> int:
        def inorder(r: TreeNode):
            if not r:
                return

            inorder(r.left)
            if r:
                self.count += 1
            inorder(r.right)

        inorder(root)
        return self.count


tree = list_to_tree([1, 2, 3, 4, 5, 6])
sol = Solution()
print(sol.count_nodes(tree))
