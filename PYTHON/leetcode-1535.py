from typing import List


class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        curr_winner = arr[0]
        win_count = 0

        for i in range(1, len(arr)):
            if curr_winner > arr[i]:
                win_count += 1
            else:
                curr_winner = arr[i]
                win_count = 1

            if win_count == k:
                return curr_winner

        return curr_winne


sol = Solution()
print(sol.getWinner([2, 1, 3, 5, 4, 6, 7], 2))  # 5
print(sol.getWinner([3, 2, 1], 10))  # 3
print(sol.getWinner([1, 25, 35, 42, 68, 70], 1))  # 25
