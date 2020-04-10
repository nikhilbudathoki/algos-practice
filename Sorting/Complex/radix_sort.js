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