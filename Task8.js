//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallestNum = (arr) => {
	if (arr.length < 2) {
		return "Array must have at least two elements";
	}

	const uniqueArray = [...new Set(arr)]

	// let secondSmallest = arr[1];

    // for(let i = 0; i < arr.length; i++){
    //     const element = arr[i];
    //     if(element < secondSmallest){
    //         secondSmallest = element
    //     }
    // }

	// return secondSmallest;
    return uniqueArray.sort()[1]
};

const inputArray = [4, -2, 7, 5, 6, 4, 2];
const result = findSecondSmallestNum(inputArray);
console.log(result); // Output: 2
