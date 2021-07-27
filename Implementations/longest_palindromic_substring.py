"""
Given a string s, return the longest palindromic substring in s.

https://leetcode.com/problems/longest-palindromic-substring/
"""

from typing import List


def longestPalindrome(s: str) -> str:
    if s == '':
        return s
    start = end = 0
    for center in range(len(s)):
        center_around_letter = expand(s, center, center)
        center_between_letters = expand(s, center, center+1)
        max_length = max(center_around_letter, center_between_letters)
        # if encountered palindrome is longer than/equal to our max so far
        if max_length > end - start:
            start = center - (max_length - 1) // 2
            end = center + max_length//2
    return s[start:end+1]

def expand(s: str, left: int, right: int) -> int:
    """
    Expands around the given indices untill it encounters text that is not palindromic
    """
    while left >= 0 and right < len(s) and s[left] == s[right]:
        print(s[left: right + 1], end = ' -> ')
        left -= 1
        right += 1
        # The last iteration of the loops overcompensates by 2
    # right - left normally undercompensates by 1, so subtracting 1
    return right - left - 1

testcase = "aabbaa"
result = longestPalindrome(testcase)

print(result)
