/*
someRecursive accepts an arr and a callback.
Function returns true if even a single val in the array
returns true when passed to callback.
*/

function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.splice(1), callback);
}