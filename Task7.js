//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (roman) => {
	const romanNum = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = 0;

	for (let i = 0; i < roman.length; i++) {
		const currentNum = roman[i];
		const nextNum = roman[i + 1];

		if (romanNum[currentNum] < romanNum[nextNum]) {
			result += romanNum[nextNum] - romanNum[currentNum];
			i++;
		} else {
			result += romanNum[currentNum];
		}
	}

	return result;
};


const result1 = romanToInteger("IX");
const result2 = romanToInteger("XXI");
console.log(result1); // Output: 9
console.log(result2); // Output: 21
