from typing import List


def minimum_difference(nums: List[int], k: int) -> int:
    nums.sort()

    answer = 10 ** 6
    left = 0

    for i in range(len(nums) - k + 1):
        left = i
        right = i + k - 1
        answer = min(answer, nums[right] - nums[left])

    return 0 if answer == 10 ** 6 else answer


print(minimum_difference([90], 1))  # 0
print(minimum_difference([9, 4, 1, 7], 2))  # 2
print(minimum_difference([10, 10, 10, 10, 10, 10, 10], 3))  # 0
print(minimum_difference([1, 2, 3, 4, 5, 6, 7], 3))  # 2
print(minimum_difference([10, 9, 8, 7, 6, 5, 4], 4))  # 3
