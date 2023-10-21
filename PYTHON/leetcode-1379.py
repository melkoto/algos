# Definition for a binary tree node.
import collections


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def get_target_copy_bfs(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        queue = collections.deque([cloned])

        while queue:
            node = queue.popleft()

            if node.val == target.val:
                return node

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        return TreeNode(-1)

    def get_target_copy_dfs(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        def dfs(c: TreeNode):
            if not c:
                return

            dfs(c.left)
            if c.val == target.val:
                self.ans = c
            dfs(c.right)

        dfs(cloned)
        return self.ans

# tree = {
#     'val': 7,
#     'left': {
#         'val': 4,
#         'left': None,
#         'right': None
#     },
#     'right': {
#         'val': 3,
#         'left': {
#             'val': 6,
#             'left': None,
#             'right': None
#         },
#         'right': {
#             'val': 19,
#             'left': None,
#             'right': None
#         }
#     }
# }
