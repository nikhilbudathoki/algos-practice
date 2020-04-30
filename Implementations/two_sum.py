"""
Given an array of integers, return indices of the two numbers 
such that they add up to a specific target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

Source: https://leetcode.com/problems/two-sum/
"""


def two_sum(nums: List[int], target: int) -> List[int]:
    hash = {}
    for i, num in enumerate(nums):
        balance = target - num
        if balance in hash:
            return [hash[balance], i]
        if num not in hash:
            hash[num] = i
