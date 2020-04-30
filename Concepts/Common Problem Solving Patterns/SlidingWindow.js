/*
maxSubarraySum: Takes in an array 'arr' and integer 'i'
Returns maximum sum of 'i' items side by side in arr
*/
function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    // Case when the window is larger than the array
    if (arr.length < n) return null;

    for (let i = 0; i < n; i++) {
        // Returns sum of first n elements in arr
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        // Remove the first element in the old window
        tempSum -= arr[i - n];

        // Add next element for new window
        tempSum += arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}


