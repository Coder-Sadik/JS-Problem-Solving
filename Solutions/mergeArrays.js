let mergeArrays = (ara1, ara2) => {
	return [...ara1, ...ara2].sort((a, b) => a - b);
};

console.log(mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));
console.log(mergeArrays([90,100,200], [110,150,140]));
