"""
Given points on a cartesian plane, return the number of rectangles that can be formed
"""

def num_rectangles(points):
    """
    (x,y), (x,y2)
    (x2,y), (x2,y2)
    x != x2
    y != y2
    """
    answer = 0
    count = {p:0 for p in points}
    for p in points:
        for p_above in points:
            if p[0] == p_above[0] and p[1] < p_above[1]:
                line = (p[1],p_above[1])
                answer += count[line]
                count[line] += 1
    return answer

points = [
    (0,0), (1,0), (2,0), (3,0), (4,0), 
    (0,1), (1,1), (2,1), (3,1), (4,1),
    (0,2), (1,2), (2,2), (3,2), (4,2), 
    (0,3), (1,3), (2,3), (3,3), (4,3),
    (0,4), (1,4), (2,4), (3,4), (4,4), 
    (0,5), (1,5), (2,5), (3,5), (4,5),
]
result = num_rectangles(points)
print(result)
