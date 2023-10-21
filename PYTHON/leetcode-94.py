# Definition for a binary tree node.
import collections
from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def inorder_traversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        queue = collections.deque()
        node = root
        result = []

        while queue or node:
            if node:
                queue.append(node)
                node = node.left
            else:
                node = queue.pop()
                result.append(node.val)
                node = node.right

        return result

# root = {

#     'value': 1,
#     'left': {
#         'value': 2,
#         'left': {
#             'value': 4,
#             'left': {
#                 'value': 7,
#                 'left': None,
#                 'right': None
#             },
#             'right': {
#                 'value': 8,
#                 'left': None,
#                 'right': None
#             }
#         },
#         'right': {
#             'value': 5,
#             'left': None,
#             'right': {
#                 'value': 9,
#                 'left': None,
#                 'right': None
#             }
#         }
#     },
#     'right': {
#         'value': 3,
#         'left': {
#             'value': 6,
#             'left': None,
#             'right': None
#         },
#         'right': None
#     }
# }
