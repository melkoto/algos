class Solution:
    def minimum_recolors(self, blocks: str, k: int) -> int:
        w = blocks[:k].count('W')

        num_of_operations = w

        for right in range(k, len(blocks)):
            if blocks[right - k] == 'W':
                w -= 1

            if blocks[right] == 'W':
                w += 1

            num_of_operations = min(num_of_operations, w)

        return num_of_operations


sol = Solution()
print(sol.minimum_recolors("WBBWWBBWBW", 7))  # 3
print(sol.minimum_recolors("WBWBBBW", 2))  # 0
print(sol.minimum_recolors("BBWBBBW", 2))  # 0
print(sol.minimum_recolors("WBB", 1))
print(sol.minimum_recolors("BWWWBB", 6))
