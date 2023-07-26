//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

// generate a random character
const getRandomCharacter = (chars) => {
	const randomIndex = Math.floor(Math.random() * chars.length);
	return chars[randomIndex];
}

// generate a random password of a specified length
const generateRandomPassword = (length) => {
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

	const allCharacters =
		uppercase + specialChars + lowercase + numbers;

	let password = "";

	for (let i = 0; i < length; i++) {
		password += getRandomCharacter(allCharacters);
	}

	return password;
}


const passwordLength = 8;
const generatedPassword = generateRandomPassword(passwordLength);
console.log(generatedPassword);
