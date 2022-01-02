from typing import List

"""
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
    the only constraint stopping you from robbing each of them is that 
    adjacent houses have security systems connected and it will automatically 
    contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
    return the maximum amount of money you can rob tonight without alerting the police.

Example:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
"""


def rob(payoff: List[int]) -> int:
    """
    Key Insight: for each house i, the maximum possible profit is the max of:
        choosing to rob that house alongisde the best possible return from two houses ago.
        choosing to not rob that house, so the profit is the same as from one house ago.
    In other words, for up to house # i, the max profit is:
        profit[i] = max(payoff[i] + profit[i-2], profit[i-1])
    """
    if len(payoff) == 0:
        return 0
    if len(payoff) == 1:
        return payoff[0]
    if len(payoff) == 2:
        return max(payoff)
    
    profit = [0 for i in payoff]
    profit[0] = payoff[0]
    profit[1] = max(payoff[0], payoff[1])
    
    for i in range(2, len(profit)):
        res = max(
            payoff[i] + profit[i-2],
            profit[i-1]            
        )
        profit[i] = res 
    return profit[-1]
    