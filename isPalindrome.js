let isPalindrome = (string) => {
	let rString = [];
	for (let i = string.length - 1; i >= 0; i--) {
		rString.push(string[i]);
	}
	return rString.join("") == string;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("peep"));
console.log(isPalindrome("rotator"));
console.log(isPalindrome("hello"));

