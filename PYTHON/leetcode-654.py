from typing import Optional, List

from tree_utils import TreeNode


class Solution:
    def construct_maximum_binary_tree(self, nums: List[int]) -> Optional[TreeNode]:
        def rec(l: int, r: int, nums: List[int]):
            if l == r:
                return None

            max_ind = max_range(l, r, nums)
            node = TreeNode(nums[max_ind])
            node.left = rec(l, max_ind, nums)
            node.right = rec(max_ind + 1, r, nums)
            return node

        def max_range(l: int, r: int, nums: List[int]):
            max_ind = l

            for i in range(l, r):
                if nums[max_ind] < nums[i]:
                    max_ind = i

            return max_ind

        return rec(0, len(nums), nums)


sol = Solution()
print(sol.construct_maximum_binary_tree([3, 2, 1, 6, 0, 5]))
print(sol.construct_maximum_binary_tree([3, 2, 1]))
