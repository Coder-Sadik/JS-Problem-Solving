// Task 1: Write a function called "fibonacciSequence" that takes a positive integer n as input and returns an array containing the first n numbers in the Fibonacci sequence.

const fibonacciSequence = (n) => {
	const fiboNums = [0, 1];
	if (n === 1) {
		return fiboNums.slice(0, 1);
	}
	if (n === 2) {
		return fiboNums;
	}
	for (let i = 2; i < n; i++) {
		fiboNums[i] = fiboNums[i - 2] + fiboNums[i - 1];
	}
	return fiboNums;
};

console.log(fibonacciSequence(8));

// Task 2: Write a function called "isFibonacciNumber" that takes a number as input and returns true if the number is a Fibonacci number, and false otherwise.

const isFibonacci = (n) => {
	const fiboNums = [0, 1];
	if (n === 0) return true;

	for (let i = 2; i <= n + 10; i++) {
		fiboNums[i] = fiboNums[i - 2] + fiboNums[i - 1];

		if (fiboNums[i] === n) return true;
		if (fiboNums[i] > n) return false;
	}
};

console.log(isFibonacci(13));
console.log(isFibonacci(9));
