"""
Given an m * n board of characters and a list of strings, return all words that are on the board
Each word must be constructed from a sequence of letters adjacent to each other.

source: https://leetcode.com/problems/word-search-ii/
"""
from typing import List
from Tries import Trie


def findWords(board: List[List[str]], words: List[str]) -> List[str]:
    x = len(board)
    y = len(board[0])
    trie = Trie()
    curr = trie.root

    def out_of_bounds(i, j):
        if i < 0 or i >= x:
            return True 
        if j < 0 or j >= x:
            return True 
        return False 
    
    for word in words:
        trie.insert(word)

    def dfs(i,j, curr, word_so_far):
        if out_of_bounds(i, j):
            return
        if curr.end_of_word:
            result.append(word_so_far)
            curr.end_of_word = False
        temp = board[i][j]
        word_so_far += temp
        if temp not in curr.children:
            return
        print(curr.children)
        curr = curr.children[temp]
        board[i][j] = ''
        dfs(i+1, j, curr, word_so_far)
        dfs(i-1, j, curr, word_so_far)
        dfs(i, j+1, curr, word_so_far)
        dfs(i, j-1, curr, word_so_far)
        board[i][j] = temp
    
    result = []
    for i in range(x):
        for j in range(y):
            dfs(i, j, 0, '')
    
    return result
    

    
    


board = [
    ["o","a","a","n"],
    ["e","t","a","e"],
    ["i","h","k","r"],
    ["i","f","l","v"]
] 
words = ["oath","pea","eat","rain"]
result = findWords(board, words)
print(result)
