let reverseString = (string) => {
	let rString = [];
	for (let i = string.length - 1; i >= 0; i--) {
		rString.push(string[i]);
	}
	return rString.join("");
};

console.log(reverseString("hello"));
console.log(reverseString("12345"));
