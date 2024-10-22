function parseString(...inputs) {
	let sum = 0;

	for (let input of inputs) {
		if (!isNaN(input)) {
			sum += Number(input);
		} else {
			return inputs.join(" ");
		}
	}

	return sum;
}

// Sample Inputs and Outputs
console.log(parseString("21", "24", "40"));
console.log(parseString("Hello", "Alpha"));
console.log(parseString("Summer", "2022"));

//problem :
// Write a Javascript Program that takes String as a parameter and checks if the parameters are number or text. If the parameters are numbers then it will return a summation of the numbers. If the parameters are not numbers then it will generate a text by concatenating the strings.
// Sample Input:
// parseString(“21” , “24’ , “40”)
// parseString(“Hello” , “Alpha”)
// parseString(“Summer” , “2022”)

// Sample Output:
// 85
// Hello Alpha
// Summer 2022
