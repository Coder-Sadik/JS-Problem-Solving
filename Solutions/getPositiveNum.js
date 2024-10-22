const getPositiveNum = (array) => {
	return array.filter((el) => el > 0);
};

console.log(getPositiveNum([2, -5, 10, -3, 8, -1, 0, 7])); // Output: [2, 10, 8, 7]
