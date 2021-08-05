"""
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Source: https://leetcode.com/problems/subsets-ii/
"""

from typing import List

def subsetsWithDup(nums: List[int]) -> List[List[int]]:
    result = []
    subset = []
    # for each index, find number of dups in front
    dup = [0] * len(nums)
    i = 0
    j = 1
    while i < len(nums):
        if j >= len(nums):
            break
        if nums[i] == nums[j]:
            dup[i] += 1
            dup[j] = -1
            j += 1
        else:
            i = j
            j += 1
    dup = [x + 1 if x > 0 else x for x in dup]

    def dfs(index):
        if index >= len(nums):
            result.append(subset.copy())
            return  
                    
        j = index
        while j < len(nums) and nums[index] == nums[j]:
            subset.append(nums[index])
            if dup[index] > 0:
                dfs(index + dup[index])
            else:
                dfs(index + 1)
            j += 1
        
        while j > index:
            subset.pop()
            j -= 1
        if dup[index] > 0:
                dfs(index + dup[index])
        else:
            dfs(index + 1)
      
    dfs(0)
    return result


nums = [1,2,2]
result = subsetsWithDup(nums)

print(result)
