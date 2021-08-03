"""
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Source: https://leetcode.com/problems/subsets/
"""
from typing import List

def subsets(nums: List[int]) -> List[List[int]]:
    def backtrack(first, curr):
        # if the combination is done
        if len(curr) == comb_length:  
            output.append(curr[:])
            return
        for i in range(first, n):
            # add nums[i] into the current combination
            curr.append(nums[i])
            # use next integers to complete the combination
            backtrack(i + 1, curr)
            # backtrack
            curr.pop()
    
    output = []
    first = 0
    curr = []
    n = len(nums)
    for comb_length in range(n + 1):
        backtrack(first, curr)
    return output

def subsets_bitmask(nums: List[int]) -> List[List[int]]:
    n = len(nums)
    result = []
    for i in range(2**n, 2**(n+1)):
        bitmask = bin(i)[3:]

        result.append([nums[j] for j in range(n) if bitmask[j] == '1'])
    return result
    
nums = [1,2,3]
result = subsets(nums)
result_bitmask = subsets_bitmask(nums)
print(result)
print(result_bitmask)

