/*
pivot: accepts an array and designates an element as the pivot,
        then rearrages elemnets in the array so all values less
        than the pivot are to left of pivot.
        returns index of pivot
*/
function pivot(arr, start = 0, end = arr.length - 1) {
	function swap(arr, i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	let pivot_value = arr[start];
	let swap_index = 0;

	for (let i = start + 1; i < arr.length; i++) {
		if (arr[i] < pivot_value) {
			++swap_index;
			swap(arr, i, swap_index)
		}
	};

	return swap_index;
}
