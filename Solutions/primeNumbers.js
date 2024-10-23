const findPrimeNums = (array) => {
	let primeNums = [];

	array.forEach((element) => {
		let i = 1,
			c = 0;

		while (i <= element / 2) {
			element % i === 0 ? c++ : (c = c);
			i++;
		}

		if (c === 1) {
			primeNums.push(element);
		}
	});

	return primeNums;
};

console.log(findPrimeNums([2, 3, 4, 5, 6, 7, 8, 9, 10, 67, 91]));

// Write a function called "findPrimeNumbers" that takes an array of positive integers as input and returns a new array containing only the prime numbers from the original array.
// For example:
// Input: [2, 3, 4, 5, 6, 7, 8, 9, 10]
// Output: [2, 3, 5, 7]
