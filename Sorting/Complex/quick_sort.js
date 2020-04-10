/*
pivot: accepts an array and designates an element as the pivot,
        then rearrages elemnets in the array so all values less
        than the pivot are to left of pivot.
        returns index of pivot
*/
function pivot(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	let pivot_value = arr[start];
	let swap_index = 0;

	for (let i = start + 1; i < arr.length; i++) {
		if (arr[i] < pivot_value) {
			++swap_index;
			swap(arr, i, swap_index)
		}
	};
	swap(arr, start, swap_index);
	return swap_index;
}

/*
quicksort: 
*/
function quicksort(arr) {

}