let removeDuplicates = (array) => {
	return [...new Set(array)];
};

console.log(removeDuplicates(["a", "b", "a", "d", "a", "c", "b"]));
