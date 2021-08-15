def exist(board, word):
    x = len(board)
    y = len(board[0])
    
    def out_of_bounds(i, j):
        if i < 0 or i >= x:
            return True 
        if j < 0 or j >= x:
            return True 
        return False
    
    def dfs(i, j, count):
        if count == len(word):
            return True
        if out_of_bounds(i, j) or word[i][j] != word[count]:
            return False
        temp = board[i][j]
        board[i][j] = ''
        found = (
            dfs(i + 1, j, count + 1) or 
            dfs(i - 1, j, count + 1) or 
            dfs(i, j + 1, count + 1) or 
            dfs(i, j - 1, count + 1)
        )
        board[i][j] = temp
        return found

    for i in range(x):
        for j in range(y):
            if board[i][j] == word[0]:
                if dfs(i, j, 0):
                    return True
    return False

board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
]
word = "SEE"

print(exist(board, word))