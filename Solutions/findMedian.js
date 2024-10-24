//Write a function called "findMedian" that takes an array of numbers as input and returns the median value of the numbers

const findMedian = (arr) => {
	const sortedArr = arr.sort((a, b) => a - b);
	const mid = Math.floor(sortedArr.length / 2);

	if (sortedArr.length % 2 === 0) {
		const median = (sortedArr[mid] + sortedArr[mid - 1]) / 2;
		return median;
	} else {
		return sortedArr[mid];
	}
};

console.log(findMedian([1, 4, 3, 2, 6, 5]));
// Output: 3.5
