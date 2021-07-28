"""
On a 2D plane, we place n stones at some integer coordinate points. 
Each coordinate point may have at most one stone.
A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.
Given an array stones of length n where stones[i] = [xi, yi] 
represents the location of the ith stone, 
return the largest possible number of stones that can be removed.
Source: https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/
"""
from typing import List


def remove_stones(stones: List[List[int]]) -> List[List[int]]:
    """
    Graph Theory:
        - Find a connected component. Remove all stones except 1.
        - Moves in one component do not affect other components
        - Stones cannot belong in more than 1 component
        - Answer: sum of moves in each component
            - moves in component: num of nodes in component - 1
            - moves_count = total # of nodes - # of components  
        - Union-Find DS
            - Use union-find to find # of groups
            - Groups are any rows that contain a point, and any col that contain a point
            - For each point(x1,y1), unify group(x1) with group(y1)
    """
    parent = {}
    for x, y in stones:
        row = -(x + 1)
        col = y + 1
        parent[row] = row 
        parent[col] = col
    
    counter = {
        'count': len(parent)
    }
    def find_representative(x):
        if x != parent[x]:
            return find_representative(parent[x])
        return x
    
    def union(x,y):
        parent_x = find_representative(x)
        parent_y = find_representative(y)
        if parent_x == parent_y:
            return 
        counter['count'] -= 1
        parent[parent_x] = parent_y
    
    for x, y in stones:
        row = -(x + 1)
        col = y + 1
        union(row, col)
    return len(stones) - counter['count'] #count number of unique representative nodes
        


stones = [
    [0,0],[0,1],[1,0],[1,2],[2,1],[2,2]
]
stones2 = [[0,0],[0,2],[1,1],[2,0],[2,2]]

result = remove_stones(stones)
result2 = remove_stones(stones2)
print(result)
print(result2)

