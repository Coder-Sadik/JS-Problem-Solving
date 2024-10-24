/* Write a function called ‘countCharacter’ that takes a string as parameters and returns an object with character count.
For Example:
Input: “Hello”
Output: {H:1, e:1, l: 2, o:1} */

const countCharacter = (str) => {
	const obj = {};
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (obj[char]) {
			obj[char]++;
		} else {
			obj[char] = 1;
		}
	}
	return obj;
};

console.log(countCharacter("Hello"));
