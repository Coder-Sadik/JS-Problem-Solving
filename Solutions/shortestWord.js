let findShortestWord = (string) => {
	let words = string.split(" ");
	let shortest = words[0];

	words.forEach((element) => {
		if (element.length < shortest.length) {
			shortest = element;
		}
	});
	return shortest;
};
console.log(findShortestWord("The quick brown fox jumps over the lazy dog"));
console.log(findShortestWord("Hello world"));
console.log(findShortestWord("Today is solving day"));
