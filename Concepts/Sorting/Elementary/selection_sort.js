/*
Selection Sort: similar to bubble sort but instead of first sorting large values,
places small values into sorted position.
*/

function swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        var minSoFar = i;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[minSoFar]) {
                minSoFar = j;
            }
        }
        if (minSoFar != i) {
            swap(arr, minSoFar, i);
        }
    }
    return arr;
}


arr = [34, 22, 10, 19, 17];
console.log(selectionSort(arr));