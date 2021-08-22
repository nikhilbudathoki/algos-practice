"""
Given an unsorted array with both positive and negative integers,
find the smallest positive integers not in the array.

Source: https://leetcode.com/problems/first-missing-positive/
"""

def smallest_not_in_array(nums):
    placeholder = len(nums) + 2
    for i in range(len(nums)):
        if nums[i] <= 0:
            nums[i] = placeholder       
    for elem in nums:
        if elem < 0:
            elem *= -1
        if elem <= len(nums) and nums[elem - 1] >= 0:
            nums[elem - 1] *= -1
    
    for i, num in enumerate(nums):
        if num >= 0:
            return i + 1
    return placeholder - 1


x = [5, 2, 3, -12, -3, 1, 6, 9]
result = smallest_not_in_array(x)

print(result)
