"""
Given an array describing heights of blocks each with width 1,
find how much water the structure can trap after raining.

Source: https://leetcode.com/problems/trapping-rain-water/
"""
from typing import List


def trap(height: List[int]) -> int:
    bounds = []
    tallest_to_left = 0
    for block in height:
        tallest_to_left = max(tallest_to_left, block)
        bounds.append(tallest_to_left)
    tallest_to_right = 0
    for i in range(len(height) -1, -1, -1):
        tallest_to_right = max(tallest_to_right, height[i])
        bounds[i] = min(bounds[i], tallest_to_right)
    total = 0
    for i, block in enumerate(height):
        total += bounds[i] - block

    return total

def trap_two_pointers(height: List[int]) -> int:
    left_max = right_max = 0
    left = 0
    right = 1
    total = 0
    while left < right:
        # Water is bounded by left bar
        if height[left] < height[right]:
            # Tallest bar to left is shorter, so can't contain water :(
            if height[left] >= left_max:
                left_max = height[left]
            # Bar to left is taller, so current bar can contain water :)
            else:
                total += left_max - height[left]
            left += 1
        # Water is bounded by right bar
        else:
            # Tallest bar to right is shorter, so can't contain water :(
            if height[right] >= right_max:
                right_max = height[right]
            # Tallest bar to right is taller, so can contain water :)
            else:
                total += right_max - height[right]
            right -= 1
    return total

height = [0,1,0,2,1,0,1,3,2,1,2,1]
result = trap(height)
print(result)

