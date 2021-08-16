"""
Given a non-empty array of decimal digits representing a positive integer,
increment the integer by one.

Source: https://leetcode.com/problems/plus-one/
"""
from typing import List

def plusOne(digits: List[int]) -> List[int]:
    if digits[-1] != 9:
        digits[-1] += 1
        return digits
    
    i = len(digits) - 1
    carry = True
    while digits[i] == 9 and i >= 0:
        digits[i] = 0
        i -= 1
    if i >= 0:
        digits[i] += 1
    else:
        digits = [1, *digits]
    return digits
    