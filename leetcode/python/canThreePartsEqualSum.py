from typing import List


class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:
        sum_arr = sum(arr)
        if sum_arr % 3 != 0:
            return False

        target, temp, res = sum_arr // 3, 0, 0

        for num in arr:
            temp += num

            if temp == target:
                res += 1
                temp = 0

        return res >= 3


print(Solution().canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]))
print(Solution().canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]))
print(Solution().canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]))
