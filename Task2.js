//Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

//Example Input: [2, -5, 10, -3, 7] Example Output: 19

const sumOfPositiveNums = (arr) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		}
	}

	return sum;
};

const myArray = [2, -5, 10, -3, 7];
console.log(sumOfPositiveNums(myArray)); // Output: 19