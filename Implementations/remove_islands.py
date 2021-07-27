"""
In a 2D matrix represeting pixels(1 black and 0 white),
remove all black pixels that are not connected to the border of the image.
"""

def remove_islands(matrix):
    connected = {}
    y_dim = len(matrix)
    x_dim = len(matrix[0])
    
    def dfs(y,x):
        steps = [
            (1,0),(-1,0),
            (0,1),(0,-1),
        ]
        for step_y, step_x in steps:
            new_y, new_x = y + step_y, x + step_x
            if out_of_bounds(new_y, new_x) or matrix[new_y][new_x] != 1:
                continue
            key = generate_key(new_y, new_x)
            if key not in connected:
                connected[key] = True
                dfs(new_y, new_x)

    def generate_key(y,x):
        return '{},{}'.format(y,x)

    def out_of_bounds(y,x):
        if min(x,y) < 0:
            return True
        if x >= x_dim or y >= y_dim:
            return True
        return False

    # row-wise
    for x in range(x_dim):
        # top row
        y = 0
        if matrix[y][x] == 1:
            connected[generate_key(y,x)] = 1
            dfs(y,x)
        # bottom row
        y = y_dim - 1
        if matrix[y][x] == 1:
            connected[generate_key(y,x)] = 1
            dfs(y,x)
    # col-wise
    for y in range(1,y_dim - 1):
        # left col
        x = 0
        if matrix[y][x] == 1:
            connected[generate_key(y,x)] = 1
            dfs(y,x)
        # right col
        x = x_dim - 1
        if matrix[y][x] == 1:
            connected[generate_key(y,x)] = 1
            dfs(y,x)
    
    for y in range(y_dim):
        for x in range(x_dim):
            key = generate_key(y,x)
            if key not in connected:
                matrix[y][x] = 0
    
    return matrix

matrix = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
]


result_matrix = [
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1]
]

remove_islands(matrix)

for y in range(len(matrix)):
    print(matrix[y])
    for x in range(len(matrix[0])):
        if matrix[y][x] != result_matrix[y][x]:
            print("Wrong")
            break