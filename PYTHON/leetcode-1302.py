import collections
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def deepest_leaves_sum(self, root: Optional[TreeNode]) -> int:
        queue = collections.deque([root])

        level_sum = []
        while queue:
            level_sum = [node.val for node in queue]

            for _ in range(len(queue)):
                node = queue.popleft()

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return sum(level_sum)

# tree = {
#     'val': 1,
#     'left': {
#         'val': 2,
#         'left': {
#             'val': 4,
#             'left': None,
#             'right': None
#         },
#         'right': {
#             'val': 5,
#             'left': None,
#             'right': None
#         }
#     },
#     'right': {
#         'val': 3,
#         'left': {
#             'val': 6,
#             'left': None,
#             'right': None
#         },
#         'right': {
#             'val': 7,
#             'left': None,
#             'right': {
#                 'val': 8,
#                 'left': None,
#                 'right': None
#             }
#         }
#     }
# }
