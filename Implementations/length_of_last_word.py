"""
Given a string s, return the length of the last word.
A word is a maximal substring consisting of non-space characters.

Source: https://leetcode.com/problems/length-of-last-word/
"""

def lengthOfLastWord(s: str) -> int:
    count = 0
    i = len(s) - 1
    if s[i] == ' ':
        while s[i] == ' ':
            i -= 1
    while i >= 0 and s[i] != ' ':
        count += 1
        i -= 1
    return count
    