/*
sumZero: Takes in a sorted array of integers
find the first pair where the sum is 0.
Return array w/ values that sum to 0
or undefined if no such pair exists
*/

function sumZero(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        result = arr[i] + arr[j];
        if (result > 0) {
            j--;
        }
        if (result < 0) {
            i++;
        }
        if (result === 0) {
            return [arr[i], arr[j]];
        }
    }
    return undefined;
}


/*
countUniqueValues: Takes in a sorted array of integers
counts unique values in the array.
There can be negative values
*/

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        }
        else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i + 1;
}
