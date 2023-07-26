//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const myCalculator = (num1, operator, num2) => {
	switch (operator) {
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "*":
			return num1 * num2;
		case "/":
			if (num2 === 0) {
				return "ERROR!";
			}
			return num1 / num2;
		default:
			return "Error: Invalid operation!";
	}
}


const result = myCalculator(10, "+", 5);
console.log(result); // Output: 15 (10 + 5)
