"""
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
    (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

source: https://leetcode.com/problems/zigzag-conversion/
"""

def convert(s, numRows):
    if numRows == 1:
        return s
    rows = [""] * numRows
    direction = 1
    place = 0

    for letter in s:
        rows[place] += letter
        place += direction
        if place == 0 or place == numRows - 1:
            direction *= -1
    return ("".join(rows))

s = "PAYPALISHIRING"
result = convert(s,3)

print(result == "PAHNAPLSIIGYIR")