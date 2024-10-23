/* **************** Triangle Palindrome **************** */

const createPalindrome = (n) => {
	const nums = [];
	let inc,
		dec,
		space = n - 1,
		limit = n;

	for (let i = 1; i <= n; i++) {
		inc = i;
		dec = i * 2 - 2;
		for (let j = 1; j <= limit; j++) {
			if (j <= space) {
				nums[j] = " ";
			} else {
				if (inc <= i * 2 - 1) {
					nums[j] = inc;
					inc++;
				} else {
					nums[j] = dec;
					dec--;
				}
			}
		}
		console.log(nums.join(""));

		limit++;
		space--;
	}
};

createPalindrome(5);

/* problem: 

Write a program that prints a triangle of palindromic strings. The number of rows in the triangle is determined by the user's input. Each row should contain a palindromic string where the characters are repeated in a mirrored pattern.
For example, if the user inputs 5, the program should print:
    1
   232
  34543
 4567654
567898765

*/
