import {
	formatDateToCustomString,
	isValidDateFormat,
	parseCustomDate,
} from '@/shared/regex';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CustomDatePicker = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = e => {
		const value = e.target.value;
		setInputValue(value);

		if (isValidDateFormat(value)) {
			const parsedDate = parseCustomDate(value);
			if (parsedDate) {
				setSelectedDate(parsedDate);
			}
		}
	};

	const handleDateChange = date => {
		setSelectedDate(date);
		setInputValue(formatDateToCustomString(date));
	};

	return (
		<DatePicker
			selected={selectedDate}
			onChange={handleDateChange}
			customInput={
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					placeholder='дд.мм.гггг'
				/>
			}
			dateFormat='dd.MM.yyyy'
			showYearDropdown
			scrollableYearDropdown
		/>
	);
};
