"""
Given a staircase, find out how many ways you can get to level n
if you can only take either 1 or two steps.
"""


def climbStairs(n: int) -> int:
    """
    Key insight: 
        For any step n, you can just take 1 step from the (n-1)th floor
        Or, you can take 2 steps from the (n-2)th floor
        So, num ways to n = num ways to (n-1) + num ways to (n-2)
    """
    
    if n <= 3:
        return n
    last = 3
    sec_last = 2
    result = 0
    for i in range(3, n):
        result = last + sec_last
        sec_last = last
        last = result
    return result
    