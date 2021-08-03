"""
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Source: https://leetcode.com/problems/subsets/
"""
from typing import List

def subsets(nums: List[int]) -> List[List[int]]:
    result = []
    if len(nums) == 0:
        result.append([])
    else:
        nums_copy = nums.copy()
        first_element = nums_copy.pop(0)
        curr_subsets = [x for x in subsets(nums_copy)]
        result += [x for x in curr_subsets]
        result += [[first_element, *x] for x in curr_subsets]
    return result




nums = [1,2,3]
result = subsets(nums)

print(result)

