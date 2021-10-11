from typing import List


class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        stack = []
        for ind, num in enumerate(prices):
            while stack and prices[stack[-1]] >= num:
                prices[stack.pop()] -= num
            stack.append(ind)

        return prices


print(Solution().finalPrices([8, 4, 6, 2, 3]))
