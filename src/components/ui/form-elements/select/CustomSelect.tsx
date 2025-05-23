/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactSelect, { OnChangeValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import styles from './CustomSelect.module.scss';
import { IOption, ISelect } from './select.interface';

const animatedComponents = makeAnimated();

export const CustomSelect: React.FC<ISelect> = ({
	field,
	options,
	placeholder,
	error,
	isLoading,
	isMulti,
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map(item => item.value)
				: (newValue as IOption).value
		);
	};

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter(
						(option: { value: any }) => field.value.indexOf(option.value) >= 0
				  )
				: options.find(
						(option: { value: any }) => option.value === field.value
				  );
		} else {
			return isMulti ? [] : '';
		}
	};

	return (
		<div className={styles.selectContainer}>
			<label>
				<span className={styles.selectHeader}>{placeholder}</span>
				<ReactSelect
					// className={styles.select}
					classNamePrefix='custom-select'
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
					placeholder={placeholder}
				/>
				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		</div>
	);
};
