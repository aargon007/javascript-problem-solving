//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFrequent = (arr) => {
	let counts = {};
	let maxValue = -1;
	let maxItem = null;
	for (const num of arr) {
		if (!(num in counts)) {
			counts[num] = 1;
		} else {
			counts[num] = counts[num] + 1;
		}
		if (counts[num] > maxValue) {
			maxValue = counts[num];
			maxItem = num;
		}
	}
	return maxItem;
};

console.log(mostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5])); //3