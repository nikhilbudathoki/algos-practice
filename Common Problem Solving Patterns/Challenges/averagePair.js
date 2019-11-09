/*
Given a sorted array and a target average, determine if there is a pair
of values in the array where the average pair equals the target average
*/

function averagePair(arr, target) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let avg = (arr[i] + arr[j]) / 2;
        if (avg === target) {
            return true;
        }
        if (avg < target) {
            i++;
        }
        if (avg > target) {
            j--;
        }
    }
    return false;
}