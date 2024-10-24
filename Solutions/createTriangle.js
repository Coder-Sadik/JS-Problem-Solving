/* **************** A Perfect Triangle **************** */

const createTriangle = (n) => {
	let length = n * 2 - 1;

	let str = [],
		startAt = Math.round(length / 2);

	for (let i = 1; i <= n; i++) {
		let count = 1,
			position = startAt;

		for (let j = 1; j <= length; j++) {
			if (j === position && count <= i) {
				str[position] = "*";
				count++;
				position += 2;
			} else str[j] = " ";
		}

		console.log(str.join(" "));
		startAt--;
	}
};

createTriangle(5);

/* 
Output: 
         *        
       *   *
     *   *   *
   *   *   *   *
 *   *   *   *   *

*/
