function swap(arr, indx1, indx2) {
    var temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}

function bubbleSort(arr) {
    var noSwaps;
    for (let i = arr.length - 1; i >= 0; i--) {
        // noSwaps helps for nearly sorted arrays. 
        // If no swaps were made for an entire pass,
        // We can call it a day and return
        noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
