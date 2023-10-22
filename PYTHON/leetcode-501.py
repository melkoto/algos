from typing import Optional, List

from tree_utils import TreeNode, list_to_tree


class Solution:
    def find_mode(self, root: Optional[TreeNode]) -> List[int]:
        modes = {}

        def inorder(r: TreeNode):
            nonlocal modes

            if not r:
                return

            inorder(r.left)
            modes[r.val] = modes.get(r.val, 0) + 1
            inorder(r.right)

        inorder(root)
        print(modes)
        max_count = max(modes.values())
        return [count for count in modes.keys() if modes[count] == max_count]


tree1 = list_to_tree([5, 3, 5, 1, 3, 5, 7])
tree2 = list_to_tree([2, None, 2, None, 2, None, 1])
tree3 = list_to_tree([3, 2, 4, 2, None, None, 4, None, None, 2, None, 4])

sol = Solution()
# print(sol.find_mode(tree1))
# print(sol.find_mode(tree2))
print(sol.find_mode(tree3))

# tree1
# {
#     'val': 5,
#     'left': {
#         'val': 3,
#         'left': {'val': 1, 'left': None, 'right': None},
#         'right': {'val': 3, 'left': None, 'right': None}
#     },
#     'right': {
#         'val': 5,
#         'left': {'val': 5, 'left': None, 'right': None},
#         'right': {'val': 7, 'left': None, 'right': None}
#     }
# }

# tree2
# {
#     'val': 2,
#     'left': {
#         'val': 2,
#         'left': {
#             'val': 2,
#             'left': {'val': 1, 'left': None, 'right': None},
#             'right': None
#         },
#         'right': None
#     },
#     'right': None
# }

# tree3
# {
#     'val': 3,
#     'left': {
#         'val': 2,
#         'left': {
#             'val': 2,
#             'left': {'val': 2, 'left': None, 'right': None},
#             'right': None
#         },
#         'right': None
#     },
#     'right': {
#         'val': 4,
#         'left': None,
#         'right': {
#             'val': 4,
#             'left': None,
#             'right': {'val': 4, 'left': None, 'right': None}
#         }
#     }
# }
