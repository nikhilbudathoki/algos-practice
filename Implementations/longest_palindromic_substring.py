"""
Given a string s, return the longest palindromic substring in s.

https://leetcode.com/problems/longest-palindromic-substring/
"""

from typing import List

def longestPalindrome(s: str) -> str:
    max_indices = [0, 0]
    dp = [[2 for x in range(len(s))] for y in range(len(s))]
    for i in range(len(s)):
        dp[i][i] = 1
    max_len = 1
    for i in range(len(s) - 1):
        j = i + 1
        if s[i] == s[j]:
            max_len = 2
            dp[i][j] = 1
            max_indices[0] = i
            max_indices[1] = j
        else:
            dp[i][j] = 0
    for length in range(3,len(s) + 1):
        for start in range(len(s)):
            end = start + length - 1
            if end >= len(s):
                continue 
            if s[start] == s[end] and dp[start + 1][end - 1] == 1:
                dp[start][end] = 1
                if length > max_len:
                    max_len = length
                    max_indices[0] = start
                    max_indices[1] = end

            else:
                dp[start][end] = 0   
    return s[max_indices[0]: max_indices[1] + 1]

testcase = "eebzcrhbishfhmiminstjudrmgqbjgztrczaipwnyxywjtfvzhjblbxdjoxitjxhoxvrygpudzollkzyjspcrurtlxvopboqogpmeimnzpzlcnmmboizjtsehbraojzdmsihepphexnpmssqeimcipbzvjltywradlbwwqzozphflxzxmrnhhjmfrucswfzndchgrgabolcjwdvfetsuugpkizncpjdeclaopfjmdwmhlxcvncbprfxfompsbqdjlqplfrppzfdntfxwxspwgybvqpjkasvqhovlwprsyqdyocryqccrbsggohjjgzhxqxcmpsugnzclgcsrbpwvrxsxaejntmnpyoabkqpzqvodcobwjqxxcfmjdrteptnjlppljntpetrdjmfcxxqjwbocdovqzpqkbaoypnmtnjeaxsxrvwpbrscglcznguspmcxqxhzgjjhoggsbrccqyrcoydqysrpwlvohqvsakjpqvbygwpsxwxftndfzpprflpqljdqbspmofxfrpbcnvcxlhmwdmjfpoalcedjpcnzikpguustefvdwjclobagrghcdnzfwscurfmjhhnrmxzxlfhpzozqwwbldarwytljvzbpicmieqssmpnxehppehismdzjoarbhestjziobmmnclzpznmiempgoqobpovxltrurcpsjyzkllozdupgyrvxohxjtixojdxblbjhzvftjwyxynwpiazcrtzgjbqgmrdujtsnimimhfhsibhrczbee"

result = longestPalindrome(testcase)

print(result)
