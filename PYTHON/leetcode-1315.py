import collections

from tree_utils import list_to_tree, TreeNode


class Solution:
    def sum_even_grandparent_bfs(self, root: TreeNode) -> int:
        queue = collections.deque([root])
        res = 0

        while queue:
            node = queue.popleft()

            if node.val % 2 == 0:
                if node.left and node.left.left:
                    res += node.left.left.val
                if node.left and node.left.right:
                    res += node.left.right.val
                if node.right and node.right.right:
                    res += node.right.right.val
                if node.right and node.right.left:
                    res += node.right.left.val

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        return res


tree = list_to_tree([6, 7, 8, 2, 7, 1, 3, 9, None, 1, 4, None, None, None, 5])

# tree = {
#     'val': 6,
#     'left': {
#         'val': 7,
#         'left': {
#             'val': 2,
#             'left': {
#                 'val': 9,
#                 'left': None,
#                 'right': None
#             },
#             'right': None
#         },
#         'right': {
#             'val': 7,
#             'left': {
#                 'val': 1,
#                 'left': None,
#                 'right': None
#             },
#             'right': {
#                 'val': 4,
#                 'left': None,
#                 'right': None
#             }
#         }
#     },
#     'right': {
#         'val': 8,
#         'left': {
#             'val': 1,
#             'left': None,
#             'right': None
#         },
#         'right': {
#             'val': 3,
#             'left': None,
#             'right': {
#                 'val': 5,
#                 'left': None,
#                 'right': None
#             }
#         }
#     }
# }

sol = Solution()
sol.sum_even_grandparent_bfs(tree)
