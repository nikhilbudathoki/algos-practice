"""
Given an unsorted array with both positive and negative integers,
find the smallest positive integers not in the array.

Source: https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/
"""

def smallest_not_in_array(arr):
    n = len(arr)
    for i in range(n):
        correct = arr[i] - 1
        while 1 <= arr[i] <= n and arr[i] != arr[correct]:
            arr[i], arr[correct] = arr[correct], arr[i]
            correct = arr[i] - 1
    
    for i in range(n):
        if i + 1 != arr[i]:
            return i + 1
    return n + 1


x = [5, 2, 3, -12, -3, 1, 6, 9]
result = smallest_not_in_array(x)

print(result)
