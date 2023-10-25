from typing import Optional

from tree_utils import TreeNode, list_to_tree


class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        result = ""

        def preorder(r: Optional[TreeNode]):
            nonlocal result

            if not r:
                return

            result += str(r.val)

            if not r.left and not r.right:
                return

            result += "("
            preorder(r.left)
            result += ")"

            if r.right:
                result += "("
                preorder(r.right)
                result += ")"

        preorder(root)
        return result


tree1 = list_to_tree([1, 2, 3, 4])
tree2 = list_to_tree([1, 2, 3, None, 4])

sol = Solution()
print(sol.tree2str(tree1))
print(sol.tree2str(tree2))
