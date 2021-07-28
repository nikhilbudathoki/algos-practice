"""
Given two strings small and big, find the number of 
permutations of small in big

Source: https://leetcode.com/problems/permutation-in-string/
"""

def dict_equal(dict1, dict2):
    for key in dict1.keys():
        if key not in dict2:
            return False
        elif dict1[key] != dict2[key]:
            return False
    return True

def num_permutations(small: str, big: str) -> int:
    if len(big) < len(small):
        return False
    small_map = {}
    sliding_map = {}
    count = 0

    for letter in small:
        if letter in small_map:
            small_map[letter] += 1
        else:
            small_map[letter] = 1   

    start = 0
    end = len(small)
    # Initial computation
    for i in range(len(small)):
        letter = big[i]
        if letter in sliding_map:
            sliding_map[letter] += 1
        else:
            sliding_map[letter] = 1
    
    # Sliding window starts
    while end < len(big):
        if dict_equal(small_map, sliding_map):
            count += 1
        sliding_map[big[start]] -= 1
        if big[end] in sliding_map:
            sliding_map[big[end]] += 1
        else:
            sliding_map[big[end]] = 1
        start += 1
        end += 1
    if dict_equal(small_map, sliding_map):
        count += 1
    return count

small = 'ab'
big = "eidbaooo"

result = num_permutations(small, big)

print(result)
