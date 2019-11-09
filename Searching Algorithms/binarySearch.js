/*
binarySearch takes in a sorted array and a value
and returns the index of the item in the array or
returns -1 if the item is not in the array
*/

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (mid !== val && left <= right) {
        let mid = Math.floor((right - left) / 2);
        if (arr[mid] < val) left = mid + 1;
        if (arr[mid] > val) right = mid - 1;
    }
    return mid === elem ? mid : -1;
}


function binarySearchRecursive(arr, val) {

}