"""
Given an array with heights of respective lines, find the maximum area
between any two lines.

source: https://leetcode.com/problems/container-with-most-water/
"""


from typing import List

def maxArea(height: List[int]) -> int:
    start = 0
    end = len(height) - 1
    result = -1
    
    while start < end:
        area = min(height[start],height[end]) * (end - start)
        result = max(area, result)     
        
        if height[start] < height[end]:
            start += 1
        else:
            end -= 1
    return result