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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const isValidDateFormat = dateString => {
	const regex = /^\d{2}\.\d{2}\.\d{4}$/;
	return regex.test(dateString);
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const parseCustomDate = dateString => {
	if (!isValidDateFormat(dateString)) return null;

	const [day, month, year] = dateString.split('.').map(Number);

	if (month < 1 || month > 12 || day < 1 || day > 31) return null;

	const date = new Date(year, month - 1, day);

	const isValidDate =
		date.getDate() === day &&
		date.getMonth() === month - 1 &&
		date.getFullYear() === year;

	return isValidDate ? date : null;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const formatDateToCustomString = date => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (!(date instanceof Date) || isNaN(date)) return '';

	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};
