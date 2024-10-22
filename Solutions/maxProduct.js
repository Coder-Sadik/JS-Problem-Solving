const getMaxTwoValues = (array) => {
	const max1 = Math.max(...array);
	const filteredArray = array.filter((num) => num !== max1);

	const max2 = Math.max(...filteredArray);

	return max1 * max2;
};

console.log(getMaxTwoValues([2, 3, 5, 6, 7]));

// Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
// Sample Input: [2, 3, 5, 6, 7]
// Sample Output: 42 (obtained by multiplying 6 and 7)
