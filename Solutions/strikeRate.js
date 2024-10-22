let strikeRate = (run, ball) => {
	return ((run / ball) * 100).toFixed(2);
};

console.log(strikeRate(100, 60));
console.log(strikeRate(25, 40));
