'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import Field from '../ui/form-elements/Field';
import styles from './Calculator.module.scss';

interface ICalculatorField {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	setValue: any;
	watch: any;
}

const CalculatorField: FC<ICalculatorField> = ({
	register,
	formState: { errors },
	watch,
	setValue,
}) => {
	const [isDistanceNeeded, setIsDistanceNeeded] = useState(false);

	return (
		<>
			<Field
				{...register('dimensions', {
					required: 'Введите максимальные габариты',
				})}
				placeholder='Максимальные габариты:'
				error={errors.dimensions}
			/>
			<Field
				{...register('weight', {
					required: 'Введите массу груза (кг)',
				})}
				placeholder='Масса груза:'
				error={errors.weight}
			/>
			{/* <Field
				{...register('hour', {
					required: 'Введите фрахт',
					validate: value => {
						const num = Number(value);
						return num % 2 === 0 || 'Число должно быть кратным 2';
					},
				})}
				placeholder='Фрахт (часы работы):'
				error={errors.hour}
				type='number'
				step='2'
				min='0'
				onKeyPress={e => {
					if (e.key === 'e' || e.key === '-' || e.key === '.') {
						e.preventDefault();
					}
				}}
				onChange={e => {
					const value = e.target.value;
					if (value && Number(value) % 2 !== 0) {
						e.target.value = Math.round(Number(value) / 2) * 2;
					}
				}}
			/> */}

			<Field
				placeholder='Фрахт (часы работы):'
				{...register('hour', {
					required: 'Введите фрахт',
					validate: value => {
						const num = Number(value);
						return num % 2 === 0 || 'Число должно быть кратным 2';
					},
				})}
				type='range'
				min='2'
				max='24'
				step='2'
				onChange={e => {
					const value = e.target.value;
					setValue('hour', value);
				}}
			/>
			<div className='flex gap-1 font-bold'>{watch('hour')} часа/ов</div>

			<h3 className={styles.calculatorFormHeader}>Дополнительные услуги:</h3>
			<Field
				{...register('floor', {
					required: 'Введите количество этажей',
				})}
				placeholder='Этажей без лифта:'
				error={errors.floor}
			/>
			<div className='flex gap-1'>
				<label className={styles.checkInputText}>
					<input
						{...register('forCity', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						type='checkbox'
						checked={isDistanceNeeded}
						onChange={e => setIsDistanceNeeded(e.target.checked)}
					/>
					<span>Работа за городом</span>
				</label>
			</div>
			{isDistanceNeeded && (
				<Field
					{...register('distance', {
						required: 'Введите расстояние',
					})}
					placeholder='Расстояние за городом (км):'
					error={errors.distance}
				/>
			)}
			<div className='flex gap-1'>
				<label className={styles.checkInputText} htmlFor='cargo'>
					<input
						{...register('cargo', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						id='cargo'
						type='checkbox'
					/>
					Груз тяжелее 20 кг
				</label>
			</div>
			<div className='flex gap-1'>
				<label className={styles.checkInputText} htmlFor='furniture'>
					<input
						{...register('furniture', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						id='furniture'
						type='checkbox'
					/>
					Разборка мебели
				</label>
			</div>
		</>
	);
};

export default CalculatorField;
