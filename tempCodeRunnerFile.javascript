
// A Perfect Triangle

console.log(Math.round(5/2));
const createTriangle = (n) => {
	let l = n * 2 - 1;

	let str = [],
		s = Math.round(l / 2);

	for (let i = 1; i <= n; i++) {
        let count =1, position = s;

		for (let j = 1; j <= l; j++) {
			if (j === position  && count <= i) {
				str[position] = "*";
                count++;
                position+=2;
			} else str[j] = " ";
		}

		console.log(str.join(" "));
		s--;
        
	}
};

createTriangle(5);
