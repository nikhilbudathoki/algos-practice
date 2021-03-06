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

	for (let i = start + 1; i < end; i++) {
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
			- call pivot on array
			- call quicksort on left of pivot and right of pivot
			- terminate recursion on: if left >= right
*/
function quicksort(arr, left = 0, right = arr.length - 1) {
	//base case
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		//left
		quicksort(arr, left, pivotIndex - 1);

		//right
		quicksort(arr, pivotIndex + 1, right);
	}
	return arr;
}


let arr1 = [1, 4, 3, 2, 5, 3]
let sorted = quicksort(arr1);
console.log(arr1);
console.log(sorted);

