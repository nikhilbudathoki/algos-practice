/*
getDigit: Takes a number and position, returns digit are position
*/
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/*
digitCount: Takes a number and returns number of digits
*/
function digitCount(num) {
	if (num == 0) return 1;
	let digits = 0;
	while (num > 0) {
		++digits;
		num = Math.floor(num / 10);
	}
	return digits;
}

/*
mostDigits: Takes array of ints and returns 
			maximum number of digits in the integers in the array
*/
function mostDigits(arr) {
	let max = 0;
	arr.forEach(element => {
		let digits = digitCount(element);
		if (digits > max) {
			max = digits;
		}
	});
	return max;
}

/*
radixSort: sorts an array based on number of digits
*/
function radixSort(arr) {
	let maxDigitCount = mostDigits(arr);

	for (let k = 0; k < maxDigitCount; ++k) {
		// Creating 10 buckets, one for each digit in kth place
		let digitBuckets = Array.from({ length: 10 }, () => [])
		//Populating buckets
		for (let i = 0; i < arr.length; i++) {
			let digit = getDigit(arr[i], k);
			digitBuckets[digit].push(arr[i]);
		}
		// Recollecting numbers from all buckets
		arr = [].concat(...digitBuckets);
	}
	return arr;
}