let countPairs = (string) => {
	let count = 0;
	for (let i = 0; i < string.length; i += 2) {
		if (string[i + 1] % 2 == 0) {
			count++;
		}
	}
	return count;
};


console.log(countPairs("a1b2c3d4e5f6"));
console.log(countPairs("x1y2z3"));
console.log(countPairs("a2b2c2d2"));
