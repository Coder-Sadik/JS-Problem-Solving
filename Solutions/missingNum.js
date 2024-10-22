const findMissingNumber = (array) => {
	let min = Math.min(...array);

	for (let i = 0; i < array.length; i++) {
		if (min !== array[i]) {
			break;
		}
		min++;
	}
	return min;
};

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));

// Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
// For example:
// Input: [1, 2, 3, 5, 6, 7, 8]
// Output: 4
