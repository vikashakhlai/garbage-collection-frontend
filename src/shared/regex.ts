export const validEmail =
	/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

export const formatPhone = (input: string) => {
	let numbers = input.replace(/\D/g, '');

	if (!numbers.startsWith('375') && !numbers.startsWith('+375')) {
		numbers = '375' + numbers;
	}

	numbers = numbers.substring(0, 12);

	let formatted = '+375';

	if (numbers.length > 3) {
		formatted += ` (${numbers.substring(3, 5)}`;
	}
	if (numbers.length > 5) {
		formatted += `) ${numbers.substring(5, 8)}`;
	}
	if (numbers.length > 8) {
		formatted += `-${numbers.substring(8, 10)}`;
	}
	if (numbers.length > 10) {
		formatted += `-${numbers.substring(10, 12)}`;
	}

	return formatted;
};
