/*
merge accepts two sorted arrays and merges them into a sorted
larger array
*/
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            ++i;
        }
        else {
            result.push(arr2[j]);
            ++j;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
    }
    return result;
}


/*
mergeSort splits up an array into arrays of length 0 or 1,
then merges those smaller arrays. It sorts while merging.
*/
function mergeSort(arr) {

}